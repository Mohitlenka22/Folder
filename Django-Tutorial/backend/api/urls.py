from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', views.ProductView, basename='products')
urlpatterns = router.urls

urlpatterns = [
    path('crud-api/', views.index),
    path('PersonAPI/', views.PersonAPI.as_view()),
    path('productView/', include(router.urls)),
    path('voter/', views.VoterSerializerView.as_view()),
    path('person-generic/<int:pk>/', views.PersonGenericView.as_view())
    # path('getdata/<int:pk>/', views.index),
    # path('delete/<int:pk>/', views.index),
    # path('writedata/', views.create)
]
