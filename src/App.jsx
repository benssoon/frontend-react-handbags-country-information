import './App.css';
import worldMap from'./assets/world_map.png';
import Card from './components/Card/Card.jsx';
import {useState} from 'react';
import axios from 'axios';



function App() {

    const[buttonVisible, toggleButtonVisible] = useState(true);

    const[allCountries, setAllCountries] = useState([]);

    async function fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all', {
                params: {
                    fields: 'name,flag,flags,population,region',
                }
            });
            setAllCountries(response.data);
        } catch (e) {
            console.error(e);
            toggleButtonVisible(true);
            setAllCountries([]);
        }
    }

    function showCountries() {
        toggleButtonVisible(false);
        fetchCountries();
    }

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

    function organizeCountries(countries) {
        countries.sort((a, b) => {return a.population - b.population})
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

    return (
        <section className="main">
            <img src={worldMap} />
            <h2>World Regions</h2>
            {buttonVisible && <button onClick={showCountries}>Click me</button>
                || organizeCountries(allCountries)}
        </section>
    )
}

export default App
