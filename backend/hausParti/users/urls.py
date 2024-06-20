from django.urls import path
from . import views
from .views import RegisterView, LoginView, LogoutView, SuccessView

urlpatterns = [
    path('test', views.test, name='test'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('success/', SuccessView.as_view(), name='success'),
]
