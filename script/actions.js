"use strict";
import { Locators } from "./locators.js";
import { baseTerms } from "./terms.js";

export class Actions {
  indexLocalStorage = "term_index";
  locators = new Locators();
  termListLocalStorage = "term_list";

  clearModalData() {
    this.clearModalInpput();
    this.clearModalErrorText();
  }

  clearModalErrorText() {
    this.locators.titleTermErrorModalText.setText(".");
    this.locators.descriptionTermErrorModalText.setText(".");
  }

  clearModalInpput() {
    this.locators.titleTermModalInput.setValue("");
    this.locators.descriptionTermModalInput.setValue("");
  }

  changeVisibilityModal() {
    const visibilityModal = this.locators.modalBlock.getStyle("display");
    if (!visibilityModal) {
      this.locators.modalBlock.setStyle("display", "flex");
    } else {
      this.locators.modalBlock.setStyle("display", "");
    }
  }

  getCurrentTermIndex() {
    let currentTermIndex = this.getIndexLocalStorage();
    if (!currentTermIndex) {
      currentTermIndex = this.setIndexLocalStorage(0);
    }

    return Number(currentTermIndex);
  }

  getCurrentTermList() {
    let currentTermList = this.getTermListLocalStorage();
    if (!currentTermList) {
      currentTermList = this.setTermListLocalStorage(baseTerms);
    }

    return JSON.parse(currentTermList);
  }

  getIndexLocalStorage() {
    return localStorage.getItem(this.indexLocalStorage);
  }

  getTermListLocalStorage() {
    return localStorage.getItem(this.termListLocalStorage);
  }

  setIndexLocalStorage(value) {
    localStorage.setItem(this.indexLocalStorage, JSON.stringify(value));
    return value;
  }

  setTermListLocalStorage(value) {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(this.termListLocalStorage, stringValue);
    return stringValue;
  }
}
