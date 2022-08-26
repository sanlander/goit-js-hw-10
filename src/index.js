import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import addNewCountry from './js/fetchCountries';
import listCountry from './js/searchListCountry';
import getRefs from './js/get-refs';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const value = refs.input.value.trim();
  if (value.length === 0) {
    refs.coutryList.innerHTML = '';
    refs.coutryInfo.innerHTML = '';
    return;
  }

  return fetch(
    `https://restcountries.com/v3.1/name/${value}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(r => {
      if (r.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (r.length >= 2 && r.length <= 10) {
        refs.coutryInfo.innerHTML = '';
        searcCountryList(r);
      } else if (r.length === 1) {
        refs.coutryList.innerHTML = '';
        fetchCountries(r);
      }
    })
    .catch(eror => {
      Notify.failure('Oops, there is no country with that name');
      refs.coutryList.innerHTML = '';
      refs.coutryInfo.innerHTML = '';
    });
}

function searcCountryList(countrys) {
  const listSearch = countrys.map(country => listCountry(country)).join('');
  refs.coutryList.innerHTML = listSearch;
}

function fetchCountries(country) {
  const searchOneContry = addNewCountry(country[0]);
  refs.coutryInfo.innerHTML = searchOneContry;
}
