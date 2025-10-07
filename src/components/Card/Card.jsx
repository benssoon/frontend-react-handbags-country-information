import './Card.css';

function Card({countryName, countryFlag, flagAlt, population}) {
    return (
        <section className="countryCard">
            <header>
                <img className="flag" src={countryFlag} alt={flagAlt} />
                <h4>{countryName}</h4>
            </header>
            <p>{countryName} has a population of {population}</p>
        </section>
    );
}

export default Card;