coop_cms is a Content Management System (CMS) for Django
===============================================
* `Yet another CMS ?`_
* `Quick start`_

.. _Yet another CMS?: #yacms
.. _Quick start?: #quick-start


.. _yacms:

Yet another CMS ?
------------------------------------

#. Coop-cms is built around Articles. It defines a basic abstract model so you can define your own model.
#. It has a website tree in a nice admin widget, to let you order Articles and *any other standard django model* you've defined in your project.
#. Based on the tree, you get templatetags for menu navigation, siblings links, breadcrumb, etc

Coop-cms has some sister apps to make it more usable:

* `coop_bar <https://github.com/ljean/coop-bar/>`_, an extensible toolbar (same concept : any app you create can add links in the toolbar).
* `coop_html_editor <https://github.com/ljean/coop_html_editor/>`_, integration of in-site html editors._
* `colorbox <https://github.com/ljean/coop-colorbox/>`_, make easy integration of jquery colorbox library.

.. _quick-start:

Quick start
-----------

Python 2.7, Django 1.8+ required

Install it with ``pip install apidev_coop_cms``

urls.py
~~~~~~~

At *the very end* of your urls.py file, add::

    urlpatterns += patterns('',
        (r'^html-editor/', include('coop_html_editor.urls')),
        (r'^', include('coop_cms.urls')),
        (r'^coop_bar/', include('coop_bar.urls')),
    )

Please note that coop-cms will handle any page slug, except the ones you will have defined before.

settings.py
~~~~~~~~~~~
In settings.py::

    MIDDLEWARE_CLASSES = (
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.locale.LocaleMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
        'django.middleware.security.SecurityMiddleware',
        'coop_cms.middleware.PermissionsMiddleware',  # Optional: redirect to login when PermissionDenied is raised
        'coop_cms.utils.RequestMiddleware',
        ...
    )

    TEMPLATE_CONTEXT_PROCESSORS = (
        "django.contrib.auth.context_processors.auth",
        "django.template.context_processors.debug",
        "django.template.context_processors.i18n",
        'django.template.context_processors.request',
        "django.template.context_processors.media",
        "django.template.context_processors.static",
        "django.contrib.messages.context_processors.messages",
        ...
    )

    AUTHENTICATION_BACKENDS = (
        'coop_cms.perms_backends.ArticlePermissionBackend',
        'coop_cms.apps.email_auth.auth_backends.EmailAuthBackend',  # Optional -> login with email rather than username
        'django.contrib.auth.backends.ModelBackend', # Django's default auth backend
    )

    INSTALLED_APPS = (
        # Contribs
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.sites',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'django.contrib.admin',
        'django.contrib.admindocs',

        # 3rd parties
        'django_extensions',
        'sorl.thumbnail',
        'floppyforms',
        'registration', # Optional

        # apps
        'coop_bar',
        'coop_html_editor',
        'colorbox',
        'coop_cms',
        'coop_cms.apps.coop_bootstrap', # Optional -> utilities for Bootstrap CSS framework
        'coop_cms.apps.email_auth', # Optional -> login with email rather than username

        # The coop_cms Article is an abstract model, you must define an Article in one of your app
        # We provide 2 apps that can be used if needed. Choose one or the other
        # 'coop_cms.apps.basic_cms', # Nothing else than a concrete Article model.
        'coop_cms.apps.demo_cms', # A ready-to-use example app.

        # The app below make possible to create articles from a RSS feed. Add it if needed
        'coop_cms.apps.rss_sync',
    )

    # These are settings to customize the CMS behavior. The values are just examples and correspond to the demo_cms app.

    # Define the Concrete Article to use. Not required if basic_cms is used
    COOP_CMS_ARTICLE_CLASS = 'coop_cms.apps.demo_cms.models.Article'

    # Define a custom form for Article editing. Not required if basic_cms is used
    COOP_CMS_ARTICLE_FORM = 'coop_cms.apps.demo_cms.forms.ArticleForm'

    # Make possible to customize the menus in the admin bar. Optional.
    # If not defined, the tuple is build with the coop_bar_cfg modules of all INSTALLED_APPS
    COOPBAR_MODULES = (
        'coop_cms.apps.demo_cms.my_coop_bar',
    )

    # Populate the urls when editing <a> tag in HTML editor
    COOP_HTML_EDITOR_LINK_MODELS = (
        'demo_cms.Article',
    )

    # Optional: you can overload the aloha plugins used by coop_cms --> see coop_html_editor docs for details
    ALOHA_PLUGINS = (
        "common/format",
        "common/highlighteditables",
    )

    # Optional: you can change the jquery version used by aloha --> see coop_html_editor docs for details
    ALOHA_JQUERY = 'js/jquery.1.7.2.js'

    # Optional : you can customize the whole behavior of aloha by proving the url of config file.
    # It will overload the config provided by coop_html_editor --> see coop_html_editor for details
    ALOHA_INIT_URL = '/static/js/my_aloha_config.js'

    # Default size of the article logo. Can be changed in template
    COOP_CMS_ARTICLE_LOGO_SIZE = "128x128"

    # Templates that can be used for an article
    # It can be a tuple or a function returning a tuple
    COOP_CMS_ARTICLE_TEMPLATES = 'coop_cms.apps.demo_cms.get_article_templates'
    # COOP_CMS_ARTICLE_TEMPLATES = (
    #     ('standard.html', 'Standard'),
    #     ('homepage.html', 'Homepage'),
    #     ('blog.html', 'Blog'),
    # )

    # Prefix for making absolute links
    COOP_CMS_SITE_PREFIX = 'http://127.0.0.1:8000'

    # from email : the domain of this address should allow the IP of your SMTP server : See SPF
    COOP_CMS_FROM_EMAIL = '"Your name" <your@email.com>'

    # TODO : REPLY-TO
    COOP_CMS_REPLY_TO = '"Your name" <your@email.com>'

    # Email address to send a newsletter test
    COOP_CMS_TEST_EMAILS = (
        '"Your name" <your@email.com>',
    )

    # tuples of templates that can be used for a newsletter.
    COOP_CMS_NEWSLETTER_TEMPLATES = (
        ('basic_newsletter.html', 'Basic'),
        ('special_newsletter.html', 'With sections'),
        ('sortable_newsletter.html', 'Sortable sections'),
    )
    # optional : A custom form for editing the newsletter
    COOP_CMS_NEWSLETTER_FORM = 'coop_cms.apps.demo_cms.forms.SortableNewsletterForm'

Base template
~~~~~~~~~~~~~
You need to create a base template ``base.html`` in one of your template folders. The ``article.html`` will inherit from this base template.

You need the following templatetags libs::

    {% load coop_navigation coop_bar_tags %}

In the <head> of the document::

    {% coop_bar_headers %}
    {% block jquery_declaration %}{% endblock %}
    {% block extra_head %}{% endblock %}

In the <body> of the document::

    {% block document %}...{% endblock %}
    {% coop_bar %}

Just before </body> at the end of the document::

    {% coop_bar_footer %}

You can also put some navigations in the <body>::

    {% navigation_as_nested_ul %}

The navigation_as_nested_ul templatetag accepts several args
 * tree="english" --> The name of the navigation_tree to use. "default" if missing
 * li_template="dropdown_li.html" --> a template for every <li> tags
 * ul_template="dropdown_ul.html" --> a template for every <ul> tags
 * li_args="dropdown_li_class.html" --> args to be used for any <li> tags

There are others templatetags for navigation : ``navigation_breadcrumb``, ``navigation_children``, ``navigation_siblings`` with similar behavior

Navigation configuration
~~~~~~~~~~~~~~~~~~~~~~~~
Don't forget to register the navigable types. In order to be accessible from the navigation, Model classes must be registered.
 * In the django admin, go to coop_cms - Navigable types
 * Add a new object and choose the model class you want to make accessible in navigation
 * Define how to get the label in navigation for a given object : use the __unicode__, use the search field or use a custom get_label method
 * If search_field is choosed, define the name of this field.
 * The search field make possible to define which field to use when the navigation tree ask for matching objects.

 * Then Go to a Navigation object in admin, the admin page propose to configure it thanks to a tree view
 * Type some text in the text field at the top
 * The field autocomplete propose all the objects of a NavigableType matching the text you entered
 * Select one object and click 'Add a new item'
 * The object is now part of the current navigation


Going further
-------------

You can look at the demo_app in apps folder to see how to customize the behavior of coop_cms:
 * Editable "pieces of HTML" in your page : A editable block that can be shared by several pages.
 * Custom templates for articles and newsletters
 * Custom fields in article
 * Custom admin bar
 * Configuration values
 
Internationalization
--------------------

If you want to make an international site, coop_cms works well with `django-modeltranslation`.

We recommend to remove `django-modeltranslation` from the apps when making the model migrations


    if not (len(sys.argv) > 1 and sys.argv[1] in ('makemigrations', )):
        INSTALLED_APPS = ('modeltranslation', ) + INSTALLED_APPS

The model migrations wil not take the translation fields into account and it will be easier to add or remove languages
with the following commands

    python manage.py sync_translation_fields --noinput
    python manage.py update_translation_fields


License
=======

apidev-coop-cms is a fork of credis/coop_cms and uses BSD license see license.txt.

coop-cms development was funded by `CREDIS <http://credis.org/>`_, FSE (European Social Fund) and Conseil Regional d'Auvergne.
