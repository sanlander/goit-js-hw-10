export default function listCountry({ flags, name }) {
    return `
    <li class="serch-list-country">
        <span class="country-flag">
            <img src="${flags.svg}" alt="${name.common}" width="30"/>
        </span>
        <span class="">${name.common}</span>
    </li>
    `;
}
