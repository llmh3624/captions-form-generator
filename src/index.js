function displayCaption(response) {
  new Typewriter("#caption", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCaption(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a3c53b47tec350ef3aeodd4ca5138dbc";
  let context =
    "You are an expert in the best captions for photos in instagram. Please name four of the best captions in the form of HTML. They should be wrapped into an <ul></ul> and each caption should be wrapped in a <li></li> individually.";
  let prompt = `Generate four captions for a post about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#caption");
  poemElement.innerHTML = `<div class="generating">⏳ Generating captions about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayCaption);
}

let captionForm = document.querySelector("#caption-generator-form");
captionForm.addEventListener("submit", generateCaption);
