"use strict";

const quotes = [
  "Не бойтесь делать ошибки. Это путь к успеху.",
  "Успех — это не конечная точка, а путешествие.",
  "Секрет успеха в том, чтобы начать.",
  "Единственный способ сделать отличную работу — это любить то, что вы делаете.",
  "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
];

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
