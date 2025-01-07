"use strict";

import { quotes } from './quote.js'

console.log(quotes)

let currentQuoteIndex = 0;

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[currentQuoteIndex];
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  displayQuote();
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  displayQuote();
}

displayQuote();

window.nextQuote = nextQuote;
window.prevQuote = prevQuote;
