import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

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
      <h2>All countries in the World</h2>
      <h3>Available: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
      <h2>Name: {props.name}</h2>
      <h2>Capital: {props.capital}</h2>
    </div>
  )
}

export default App;
