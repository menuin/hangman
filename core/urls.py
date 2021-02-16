from . import views
from django.urls import path

urlpatterns=[
    path('', views.start_home , name="start_home"),
    path('<int:pk>/play', views.choose_word, name="play"),
]