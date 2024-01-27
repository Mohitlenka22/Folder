from django.urls import path
from . import views

urlpatterns = [
    path("get/", views.retrieve),
    path("create", views.UserCreateAPIView.as_view()),
    path("retrieve/<int:pk>", views.UserRetrieveAPIView.as_view())
]