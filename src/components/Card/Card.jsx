import './Card.css';

function Card({countryName, countryFlag, flagAlt, population, textColor}) {
    return (
        <section
            className="countryCard"
            style={{'--country-name-color': textColor}}
        >
            <header>
                <img className="flag" src={countryFlag} alt={flagAlt} />
                <h4>{countryName}</h4>
            </header>
            <p>{countryName} is situated in [subarea-name] and the capital is [capital]
                It has a population of {Math.round(population/1000000)} million people and it borders with
                [amount] neighboring countries.
                Websites can be found on [domain] domains.</p>
        </section>
    );
}

export default Card;