document.addEventListener('DOMContentLoaded', function(){

    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0c2c8151&app_key=833e165ade70dffd984af6f024de9ba9')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        //Populate the recipe postings
        for (let i = 0; i < data.hits.length; i++) {

            const allRecipes = data.hits[`${i}`].recipe;
            const recipe = document.createElement('div');
            recipe.className= 'recipes';
            recipe.id=`recipe${i}`;
            document.querySelector('#recipeList').append(recipe);
            

            //Recipe title
            const recipeTitle = document.createElement('div');
            recipeTitle.className = 'recipeTitles';
            recipeTitle.innerHTML = allRecipes.label ;
            document.querySelector(`#recipe${i}`).append(recipeTitle);

           ///Recipe Image
            const recipeImage = document.createElement('img');
            recipeImage.className = 'recipeThumbnails';
            recipeImage.src = allRecipes.image;
            document.querySelector(`#recipe${i}`).append(recipeImage);

            ///Recipe Calories
            const recipeCal = document.createElement('div');
            recipeCal.className = 'recipeCals';
            recipeCal.innerHTML = `Calories: ${Math.ceil(allRecipes.calories)}`;
            document.querySelector(`#recipe${i}`).append(recipeCal);

            ///Recipe Type
            const recipeType = document.createElement('div');
            recipeType.className = 'recipeType';
            recipeType.innerHTML = `Meal Type: ${allRecipes.mealType}`;
            document.querySelector(`#recipe${i}`).append(recipeType);

            ///Recipe Cuisine
            const recipeCuisine = document.createElement('div');
            recipeCuisine.className = 'recipeCuisine';
            recipeCuisine.innerHTML = `${allRecipes.cuisineType}`;
            document.querySelector(`#recipe${i}`).append(recipeCuisine);
            
        

        }
        

  
    });
});