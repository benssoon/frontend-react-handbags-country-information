import './App.css';
import worldMap from'./assets/world_map.png';
import Card from './components/Card/Card.jsx';
import {useState} from 'react';
import axios from 'axios';



function App() {

    const[searchState, setSearchState] = useState('');
    const[countries, setCountries] = useState([]);

    async function fetchCountries(stateFunction, country) {
        const url = 'https://restcountries.com/v3.1/' + (country ? `name/${country}` : 'all');
        console.log('The url is: ' + url);
        try {
            const response = await axios.get(url, {
                params: {
                    fields: 'name,flag,flags,population,region',
                }
            });
            stateFunction(response.data);
        } catch (e) {
            console.error(e);
            stateFunction([]);
        }
    }

    function chooseColor(region) {
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

    function organizeCountries(countries) {
        countries.sort((a, b) => {return a.population - b.population});
        return (
            <section className="allCountries">
                {countries.map((country) => {
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

    function handleChange(e) {
        setSearchState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchState('');
        fetchCountries(setCountries, searchState);
    }

    return (
        <section className="main">
            <img src={worldMap} />

            <form>
                <input
                type={'text'}
                value={searchState}
                onChange={handleChange}
            />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >Search
                </button>
            </form>
            {countries.length === 0 ||
                <h2>{
                    (countries.length === 250 && 'World Countries') ||
                    ('Your Selected Countr' + (countries.length === 1 ? 'y' : 'ies'))
                }</h2>
            }
            {organizeCountries(countries)}
        </section>
    )
}

export default App
