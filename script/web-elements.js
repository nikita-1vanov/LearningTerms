"use strict";

export class WebElements {
  constructor(locator) {
    this.locator = locator;
  }

  addEvent(type, callback) {
    this.locator.addEventListener(type, callback);
  }

  getStyle(key) {
    return this.locator.style[key];
  }

  getText() {
    return this.locator.innerText;
  }

  getValue() {
    return this.locator.value;
  }

  setStyle(key, value) {
    return (this.locator.style[key] = value);
  }

  setText(value) {
    this.locator.innerText = value;
  }

  setValue(value) {
    this.locator.value = value;
  }
}
