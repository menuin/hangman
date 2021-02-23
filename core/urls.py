from . import views
from django.urls import path


urlpatterns=[
    path('', views.start_home , name="start_home"),
    path('<int:pk>/play', views.choose_word, name="play"),
    path('<int:pk>/gameover',views.game_over,name="game_over"),
    path('<int:pk>',views.restart,name="restart"), #<int:pk>/play로 하면 에러
    path('play',views.update_miss, name="update_miss"),
]
