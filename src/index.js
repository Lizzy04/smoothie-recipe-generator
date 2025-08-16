function displayRecipe(response) {
  let recipe = response.data.answer;

  //Remove triple backticks
  recipe = recipe.replace(/```(?:html)?/gi, "").trim();
  recipe = recipe.replace(/```/g, "").trim();

  new Typewriter("#recipe", {
    strings: recipe,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "eb44271etfeaa70ae19b3f316ao64530";
  let context =
    "You are a professional nutrisionist who makes the best smoothies. Your task is to generate a short smoothie recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate a smoothie recipe flavor ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳Generating a ${instructionsInput.value} flavored smoothie recipe</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
