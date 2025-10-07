import './Countries.css';
import Card from '../Card/Card.jsx';
import {useState} from 'react';

function Countries({allCountries}) {
    return (
      <section className="allCountries">
          {allCountries.map((country) => {
              return (<Card
                  key={country.name+country.name.common}
                  countryName={country.name.common}
                  countryFlag={country.flags.svg}
                  flagAlt={country.flags.alt}
                  emojiFlag={country.flag}
                  population={country.population}
              />)
          })}

          <p>hi</p>
      </section>
    );
}

export default Countries;