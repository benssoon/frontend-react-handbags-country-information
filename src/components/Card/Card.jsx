import './Card.css';
import arrayToString from '../../helpers/arrayToString.js';

function Card({countryName, countryFlag, flagAlt, population, textColor, capital, domains, neighbors, subregion}) {
    return (
        <section
            className="countryCard"
            style={{'--country-name-color': textColor}}
        >
            <header>
                <img className="flag" src={countryFlag} alt={flagAlt} />
                <h2>{countryName}</h2>
            </header>
            <p>{countryName} is situated in {subregion} and the capital is {capital}.</p>
            <p>It has a population of {Math.round(population/1000000)} million
                people and it borders with {neighbors.length} neighboring countries.</p>

            <p>Websites can be found on {arrayToString(domains)} domains.</p>
        </section>
    );
}

export default Card;