function fetchCountry(value) {
  return fetch(
    `https://restcountries.com/v3.1/name/${value}?fields=name,capital,population,flags,languages`
    ).then(r => r.json());
    console.log(fetch);
}

export default { fetchCountry };
