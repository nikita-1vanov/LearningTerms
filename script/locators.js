"use strict";
import { WebElements } from "./web-elements.js";

export class Locators {
  get addTermsButton() {
    return new WebElements(document.querySelector("#add_terms_button"));
  }

  get descriptionTermErrorModalText() {
    return new WebElements(
      document.querySelector("#description__input .modal__error-message")
    );
  }

  get descriptionTermModalInput() {
    return new WebElements(document.querySelector("#description__input input"));
  }

  get modalBlock() {
    return new WebElements(document.querySelector(".modal__block"));
  }

  get termDescription() {
    return new WebElements(
      document.querySelector(".content__term-description")
    );
  }

  get termTitle() {
    return new WebElements(document.querySelector(".content__term-name"));
  }

  get titleTermErrorModalText() {
    return new WebElements(
      document.querySelector("#title__input .modal__error-message")
    );
  }

  get titleTermModalInput() {
    return new WebElements(document.querySelector("#title__input input"));
  }
}
