import recipes from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.querySelector(".search button");

    searchButton.addEventListener("click", searchHandler);

    function random(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomListEntry(list) {
        return list[random(list.length)];
    }

    function tagsTemplate(tags) {
        return tags.map(tag => `<span>${tag}</span>`).join("");
    }

    function ratingTemplate(rating) {
        let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
        for (let i = 1; i <= 5; i++) {
            html += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">${i <= rating ? '⭐' : '☆'}</span>`;
        }
        html += `</span>`;
        return html;
    }

    function recipeTemplate(recipe) {
        return `
        <div class="recipe">
            <div class="cont-img">
                <img src="${recipe.image}" alt="Recipe Image">
            </div>
            <div class="cont-info">
                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </div>`;
    }

    function renderRecipes(recipeList) {
        const recipeContainer = document.querySelector(".cont-recipes");
        recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
    }

    function init() {
        const randomRecipe = getRandomListEntry(recipes);
        renderRecipes([randomRecipe]);
    }

    function filterRecipes(query) {
        return recipes
            .filter(recipe => 
                recipe.name.toLowerCase().includes(query) || 
                recipe.description.toLowerCase().includes(query) ||
                recipe.tags.find(tag => tag.toLowerCase().includes(query)) || 
                recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
            )
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    function searchHandler(e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        const filteredRecipes = filterRecipes(query);
        renderRecipes(filteredRecipes);
    }

    init();
});
