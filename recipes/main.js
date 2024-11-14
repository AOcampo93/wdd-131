import { recipes } from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", searchRecipes);

    function searchRecipes(event) {
        const query = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        displayRecipes(filteredRecipes);
    }

    function displayRecipes(recipes) {
        // Aquí puedes agregar el código para mostrar las recetas filtradas
        console.log(recipes);
    }
});
