from django.urls import path

from .views import *

urlpatterns = [
    path('', ProductCreateView.as_view(), name='main'),
    path('about/', about, name='about'),
    path('products/', products, name='products'),
    path('products/<int:id>/', details, name='detail'),
    path('contact-us/', contact, name='contact-us'),
]