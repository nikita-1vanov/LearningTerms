"use strict";

import { baseDefinition } from "./definition.js";

const currentDefinition = localStorage.getItem("definition");

if (!currentDefinition) {
  localStorage.setItem("definition", JSON.stringify(baseDefinition));
}

const definition = currentDefinition
  ? JSON.parse(currentDefinition)
  : baseDefinition;

let currentQuoteIndex = 0;

function displayDefinition() {
  const descriptionDefinitionElement = document.querySelector(
    ".definition_description"
  );

  const nameDefinitionElement = document.querySelector(".definition_name");
  descriptionDefinitionElement.textContent =
    definition[currentQuoteIndex]["description"];
  nameDefinitionElement.textContent = definition[currentQuoteIndex]["name"];
}

function prevDefinition() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + definition.length) % definition.length;
  displayDefinition();
}

function nextDefinition() {
  currentQuoteIndex = (currentQuoteIndex + 1) % definition.length;
  displayDefinition();
}

displayDefinition();

window.nextDefinition = nextDefinition;
window.prevDefinition = prevDefinition;
