function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Hello", "World",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeElement = document.querySelector("#recipe-generator-form");
recipeElement.addEventListener("submit", generateRecipe);
