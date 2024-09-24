// app/countries/page.tsx
import React from 'react';
import { CountryType } from 'src/types/countryType';

const CountriesPage: React.FC = async () => {
  // Fetch the data using the fetch API
  const res = await fetch('http://127.0.0.1:8000/countries/');
  const countries: CountryType = await res.json();

  return (
    <div>
      <h1>Countries by Continent</h1>
      <ul>
        {Object.entries(countries.continent_country_map).map(([continent, countries]) => (
          <li key={continent}>
            <h2>{continent}</h2>
            <ul>
              {countries.map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesPage;
