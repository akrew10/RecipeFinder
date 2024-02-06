from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "recipe_finder/index.html")

def recipe(request, id):
    return render(request, "recipe_finder/recipe.html")

def home(request):
    return render(request, "recipe_finder/home.html")