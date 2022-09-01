from django.urls import path
from . import views

urlpatterns = [
    path('', views.TodoList.as_view(), name=''),
    path('<uuid:pk>', views.TodoDetail.as_view(), name=''),
]
