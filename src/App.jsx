import './App.css';
import worldMap from'./assets/world_map.png';
import Card from './components/Card/Card.jsx';
import {useState} from 'react';
import Countries from './components/Countries/Countries.jsx';
import axios from 'axios';
import countries from './components/Countries/Countries.jsx';



function App() {

    const[buttonVisible, toggleButtonVisible] = useState(true);

    const[allCountries, setAllCountries] = useState([]);

    async function fetchCountry() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all', {
                params: {
                    fields: 'name,flag,flags,population',
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
        fetchCountry();
    }

    return (
        <section className="main">
            <img src={worldMap} />
            <h2>World Regions</h2>
            {buttonVisible && <button onClick={showCountries}>Click me</button>
                || <Countries allCountries={allCountries}/>}
        </section>
    )
}

export default App
