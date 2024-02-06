from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("search", views.index, name="index"),
    path("<str:int>", views.recipe, name="recipe")
]