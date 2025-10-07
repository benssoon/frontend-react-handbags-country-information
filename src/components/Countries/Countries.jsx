import './Countries.css';
import Card from '../Card/Card.jsx';
import {useState} from 'react';

function Countries({allCountries}) {
    function chooseColor(region) {
        console.log(region);
        let color = 'forestgreen';
        switch (region) {
            case 'Africa':
                color = 'blue';
                break;
            case 'Americas':
                color = 'darkgreen';
                break;
            case 'Asia':
                color = 'darkred';
                break;
            case 'Europe':
                color = 'yellow';
                break;
            case 'Oceania':
                color = 'purple';
                break;
            default:
                break;
        }
        return color;
    }
    allCountries.sort((a, b) => {return a.population - b.population})
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
                  textColor={chooseColor(country.region)}
              />)
          })}
      </section>
    );
}

export default Countries;