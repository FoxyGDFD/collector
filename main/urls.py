from django.urls import path
from .views import *

urlpatterns = [
    path('', MainView.as_view(), name='main'),
    path('map/', MapView.as_view(), name='map'),
    path('profile/', ProfileView.as_view(), name='profile'),
]
