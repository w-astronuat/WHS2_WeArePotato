# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.views.generic.base import TemplateView
from coop_cms.apps.email_auth.registration_backend.views import EmailRegistrationView, EmailActivationView

urlpatterns = [
    url(
        r'^activate/complete/$',
        TemplateView.as_view(template_name='registration/activation_complete.html'),
        name='registration_activation_complete'
    ),
    # Activation keys get matched by \w+ instead of the more specific
    # [a-fA-F0-9]{40} because a bad activation key should still get to the view;
    # that way it can return a sensible "invalid key" message instead of a
    # confusing 404.
    url(
        r'^activate/(?P<activation_key>\w+)/$',
        EmailActivationView.as_view(),
        name='registration_activate'
    ),
    url(
        r'^register/$',
        EmailRegistrationView.as_view(),
        name='registration_register'
    ),
    url(
        r'^register/complete/$',
        TemplateView.as_view(template_name='registration/registration_complete.html'),
        name='registration_complete'
    ),
    url(
        r'^register/closed/$',
        TemplateView.as_view(template_name='registration/registration_closed.html'),
        name='registration_disallowed'
    ),
    url(r'', include('registration.auth_urls')),
]
