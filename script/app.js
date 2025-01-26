"use strict";
import { Actions } from "./actions.js";
import { Locators } from "./locators.js";

class App {
  actions = new Actions();
  locator = new Locators();
}

export const app = new App();
