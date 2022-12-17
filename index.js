// je récupère tous les inputs
const nameInput = document.querySelector('#name');
const cardNumberInput = document.querySelector('#number');
const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('.year');
const cvcInput = document.querySelector('#cvc');
// const button = document.querySelector('.button');
const form = document.querySelector('#form');

// je récupères les eléméents des cartes
const nameEl = document.querySelector('.card-name');
const numberEl = document.querySelector('.card-number');
const dateEl = document.querySelector('.card-date');
const cvcEl = document.querySelector('.card-cvc');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameEl.innerHTML = nameInput.value.toUpperCase();
  numberEl.innerHTML = format(cardNumberInput.value);
  dateEl.innerHTML = monthInput.value + '/' + yearInput.value;
  cvcEl.innerHTML = cvcInput.value;
});

// je crée le format carte bleue avec des séries de 4 chiffres
function format(num) {
  return num.toString().replace(/\d{4}(?=.)/g, '$& ');
}
