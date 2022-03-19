import React, { useEffect, useState } from 'react';
// how to import a file......
import './Country.css'


function LoadCountries() {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>All countries in the World From another file</h2>
            <h3>Available: {countries.length}</h3>
            {
                countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
            }
        </div>
    )
}
const Country = (props) => {
    return (
        <div className='imported-style' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
            <h2>Name: {props.name}</h2>
            <h2>Capital: {props.capital}</h2>
        </div>
    );
};

export default LoadCountries;