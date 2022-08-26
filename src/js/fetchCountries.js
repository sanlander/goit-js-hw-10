export default function addNewCountry({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  return `
    <p class="country-title">
      <span class="country-flag">
        <img src="${flags.svg}" alt="${name.common}" width="35" />
      </span>
      <span class="country-name">${name.common}</span>
    </p>
    <p class="country-data"><b>Capital:</b> ${capital}</p>
    <p class="country-data"><b>Population:</b> ${population}</p>
    <p class="country-data"><b>Languages:</b> ${(Object.values(languages)).join(', ')}</p>
  `;
}
