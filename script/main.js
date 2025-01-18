"use strict";

import { definition } from "./definition.js";

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
