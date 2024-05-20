# -*- coding: utf-8 -*-

from django.test import TestCase
from django.contrib.auth.models import User, Permission
from django.core.urlresolvers import reverse
from coop_cms.settings import get_article_class
from coop_cms.apps.rss_sync.models import RssItem, RssSource
from coop_cms.models import BaseArticle
from django.contrib.contenttypes.models import ContentType
from django.conf import settings
from unittest import skipUnless

class BaseTestCase(TestCase):
    def setUp(self):
        self.sync = None
        self.staff = None
        self.editor = None

    def _log_as_synchro(self):
        if not self.sync:
            self.sync = User.objects.create_user('toto', 'toto@toto.fr', 'toto')
            self.sync.is_staff = True
            can_add_items = Permission.objects.get(content_type__app_label='rss_sync', codename='add_rssitem')
            can_change_items = Permission.objects.get(content_type__app_label='rss_sync', codename='change_rssitem')
            self.sync.user_permissions.add(can_add_items)
            self.sync.user_permissions.add(can_change_items)
            self.sync.save()
        
        self.client.login(username='toto', password='toto')
        
    def _log_as_editor(self):
        if not self.editor:
            self.editor = User.objects.create_user('tata', 'tata@tata.fr', 'tata')
            self.editor.is_staff = True
            ct = ContentType.objects.get_for_model(get_article_class())
            can_add_art = Permission.objects.get(content_type__app_label=ct.app_label, codename='add_{0}'.format(ct.model))
            can_change_art = Permission.objects.get(content_type__app_label=ct.app_label, codename='change_{0}'.format(ct.model))
            self.editor.user_permissions.add(can_add_art)
            self.editor.user_permissions.add(can_change_art)
            self.editor.save()
        
        self.client.login(username='tata', password='tata')
        
    def _log_as_staff(self):
        if not self.staff:
            self.staff = User.objects.create_user('titi', 'titi@titi.fr', 'titi')
            self.staff.is_staff = True
            self.staff.save()
        
        self.client.login(username='titi', password='titi')

@skipUnless('coop_cms.apps.rss_sync' in settings.INSTALLED_APPS, "rss_sync not installed installed")
class RssTest(BaseTestCase):

    def _do_test_creatitem_from_source(self, url):
        source = RssSource.objects.create(url=url)
        
        self._log_as_synchro()
        
        url = reverse("rss_sync_collect_rss_items", args=[source.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 200)
        
        self.assertTrue(RssItem.objects.filter(source=source).count() > 0)
        for item in RssItem.objects.filter(source=source):
            self.assertTrue(len(item.summary)>0)
            self.assertTrue(len(item.title)>0)
            
    def test_creatitem_from_djangoplanet(self):
        self._do_test_creatitem_from_source("http://www.django-fr.org/planete/rss/")
        
    def test_creatitem_from_blogapidev(self):
        self._do_test_creatitem_from_source("http://www.apidev.fr/blog/rss/")
        
    def test_creatitem_from_crespaca(self):
        #No update_date
        self._do_test_creatitem_from_source("http://www.cresspaca.org/rss_actus.php")
            
    def test_synchro_url_is_not_rss(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/')
        
        self._log_as_synchro()
        
        url = reverse("rss_sync_collect_rss_items", args=[source.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 200)
        
        self.assertEquals(RssItem.objects.filter(source=source).count(), 0)
            
    def test_synchro_not_an_url(self):
        source = RssSource.objects.create(url='toto')
        self._log_as_synchro()
        
        url = reverse("rss_sync_collect_rss_items", args=[source.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 200)
        
        self.assertEquals(RssItem.objects.filter(source=source).count(), 0)
        
    def test_creatitem_permission_required(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/blog/rss/')
        
        url = reverse("rss_sync_collect_rss_items", args=[source.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 403)
        self.assertTrue(RssItem.objects.filter(source=source).count() == 0)
        
    def test_creatitem_staff_is_not_enough(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/blog/rss/')
        self._log_as_staff()
        url = reverse("rss_sync_collect_rss_items", args=[source.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 403)
        self.assertTrue(RssItem.objects.filter(source=source).count() == 0)
        
    def test_creatitem_no_source(self):
        self._log_as_synchro()
        url = reverse("rss_sync_collect_rss_items", args=[1])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 404)
        self.assertTrue(RssItem.objects.count() == 0)
                             

@skipUnless('coop_cms.apps.rss_sync' in settings.INSTALLED_APPS, "rss_sync not installed installed")
class CreateArticleTest(BaseTestCase):
    def test_create_article_from_rssitem(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/blog/rss/')
        item = RssItem.objects.create(title="hey-hey", summary="there is nothing i can say", source=source)
        
        self._log_as_editor()
        
        url = reverse("rss_sync_create_cms_article", args=[item.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 200)
        
        art = get_article_class().objects.get(title=item.title)
        self.assertEqual(item.summary, art.content)
        self.assertEqual(art.publication, BaseArticle.DRAFT)
        
    def test_create_article_from_rssitem_permission_required(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/blog/rss/')
        item = RssItem.objects.create(title="heyhey", summary="nothing i can say", source=source)
        
        url = reverse("rss_sync_create_cms_article", args=[item.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 403)
        
        self.assertEqual(0, get_article_class().objects.count())
        
    def test_create_article_from_rssitem_staff_is_not_enough(self):
        source = RssSource.objects.create(url='http://www.apidev.fr/blog/rss/')
        item = RssItem.objects.create(title="heyhey", summary="nothing i can say", source=source)
        
        self._log_as_staff()
        
        url = reverse("rss_sync_create_cms_article", args=[item.id])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 403)
        
        self.assertEqual(0, get_article_class().objects.count())
        
    def test_creatie_article_item_not_found(self):
        self._log_as_editor()
        url = reverse("rss_sync_create_cms_article", args=[1])
        response = self.client.get(url, follow=True)
        self.assertEqual(response.status_code, 404)
        self.assertTrue(get_article_class().objects.count() == 0)
