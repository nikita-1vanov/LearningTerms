"use strict";
import { baseDefinition } from "./definition.js";

let currentQuoteIndex = getCurrentQuoteIndex();
let definition = getDefinition();

function getCurrentQuoteIndex() {
  const currentQuoteIndex = localStorage.getItem("quoteIndex");

  if (!currentQuoteIndex) {
    localStorage.setItem("quoteIndex", JSON.stringify(0));
  }

  const index = currentQuoteIndex ? Number(currentQuoteIndex) : 0;
  return index;
}

function getDefinition() {
  const currentDefinition = localStorage.getItem("definition");

  if (!currentDefinition) {
    localStorage.setItem("definition", JSON.stringify(baseDefinition));
  }

  const definition = currentDefinition
    ? JSON.parse(currentDefinition)
    : baseDefinition;

  return definition;
}

function displayDefinition() {
  const nameDefinitionElement = document.querySelector(".content__term-name");
  const descriptionDefinitionElement = document.querySelector(
    ".content__term-description"
  );

  descriptionDefinitionElement.textContent =
    definition[currentQuoteIndex]["description"];
  nameDefinitionElement.textContent = definition[currentQuoteIndex]["name"];
}

function addNewTerms() {
  document.querySelector("#title__input .modal__error-message").innerText = ".";
  document.querySelector(
    "#description__input .modal__error-message"
  ).innerText = ".";
  const title = document.querySelector("#title__input input").value.trim();
  const description = document
    .querySelector("#description__input input")
    .value.trim();

  if (title === "" || title.length < 2 || title.length > 30) {
    document.querySelector("#title__input .modal__error-message").innerText =
      "Name must be between 2 and 30 symbols";
    return;
  }

  if (
    description === "" ||
    description.length < 10 ||
    description.length > 300
  ) {
    document.querySelector(
      "#description__input .modal__error-message"
    ).innerText = "Description must be between 10 and 300 symbols";
    return;
  }

  let uniqTitile = true;

  for (const term of definition) {
    if (term.name === title) {
      term.description = description;
      uniqTitile = false;
    }
  }

  if (uniqTitile) {
    definition.push({
      name: title,
      description: description,
    });
  }

  document.querySelector("#title__input input").value = "";
  document.querySelector("#description__input input").value = "";

  localStorage.setItem("definition", JSON.stringify(definition));
}

function prevDefinition() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + definition.length) % definition.length;
  localStorage.setItem("quoteIndex", JSON.stringify(currentQuoteIndex));
  displayDefinition();
}

function nextDefinition() {
  currentQuoteIndex = (currentQuoteIndex + 1) % definition.length;
  localStorage.setItem("quoteIndex", JSON.stringify(currentQuoteIndex));
  displayDefinition();
}

const addTermButton = document.querySelector("#add_terms_button");
addTermButton.addEventListener("click", () => {
  document.querySelector("#title__input input").value = "";
  document.querySelector("#description__input input").value = "";
  document.querySelector("#title__input .modal__error-message").innerText = ".";
  document.querySelector(
    "#description__input .modal__error-message"
  ).innerText = ".";

  const visibilityModal = document.querySelector(".modal__block").style.display;
  if (!visibilityModal) {
    document.querySelector(".modal__block").style.display = "flex";
  } else {
    document.querySelector(".modal__block").style.display = "";
  }
});

displayDefinition();

window.addNewTerms = addNewTerms;
window.nextDefinition = nextDefinition;
window.prevDefinition = prevDefinition;
