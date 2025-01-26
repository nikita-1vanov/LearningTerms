"use strict";
import { app } from "./app.js";

let currentTermIndex = app.actions.getCurrentTermIndex();
let currentTermList = app.actions.getCurrentTermList();

function displayTerm() {
  app.locator.termTitle.setText(currentTermList[currentTermIndex].title);
  app.locator.termDescription.setText(
    currentTermList[currentTermIndex].description
  );
}

function addNewTerms() {
  app.actions.clearModalErrorText();
  const title = app.locator.titleTermModalInput.getValue().trim();
  const description = app.locator.descriptionTermModalInput.getValue().trim();

  if (title === "" || title.length < 2 || title.length > 30) {
    app.locator.titleTermErrorModalText.setText(
      "Name must be between 2 and 30 symbols"
    );
    return;
  }

  if (
    description === "" ||
    description.length < 10 ||
    description.length > 300
  ) {
    app.locator.descriptionTermErrorModalText.setText(
      "Description must be between 10 and 300 symbols"
    );
    return;
  }

  let uniqTitile = true;

  for (const term of currentTermList) {
    if (term.title === title) {
      term.description = description;
      uniqTitile = false;
    }
  }

  if (uniqTitile) {
    currentTermList.push({
      title: title,
      description: description,
    });
  }

  app.actions.clearModalInpput();
  app.actions.setTermListLocalStorage(currentTermList);
}

function prevTerm() {
  currentTermIndex =
    (currentTermIndex - 1 + currentTermList.length) % currentTermList.length;
  app.actions.setIndexLocalStorage(currentTermIndex);
  displayTerm();
}

function nextTerm() {
  currentTermIndex = (currentTermIndex + 1) % currentTermList.length;
  app.actions.setIndexLocalStorage(currentTermIndex);
  displayTerm();
}

app.locator.addTermsButton.addEvent("click", () => {
  app.actions.clearModalData();
  app.actions.changeVisibilityModal();
});

displayTerm();

window.addNewTerms = addNewTerms;
window.nextTerm = nextTerm;
window.prevTerm = prevTerm;
