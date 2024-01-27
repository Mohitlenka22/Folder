from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name = "Home"),
    path('about/<int:x>/<int:y>', views.About, name = "about"),
    path('index', views.index, name='index'),
    path('calc', views.calc, name = 'calc')
]
