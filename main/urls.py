from django.urls import path
from .views import *

urlpatterns = [
    path('', MainView.as_view(), name='main'),
    path('map/', MapView.as_view(), name='map'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('test/', test , name='test'),
    path('reason/', ReasonView.as_view(), name='reason'),
    path('result/', ResultView.as_view(), name='result'),
    path('manager/', ManagerView.as_view(), name='manager'),
]
