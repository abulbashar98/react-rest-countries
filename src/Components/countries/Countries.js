import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
// how to import a file......
import './Countries.css'


function Countries() {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [])


    return (
        // This is how you send props one by one in the child Component.....

        // {/* <div>
        //     <h2>All countries in the World From another file</h2>
        //     <h3>Available: {countries.length}</h3>
        //     {
        //         countries.map(country => <Country
        //             name={country.name}
        //             capital={country.capital}
        //             region={country.region}
        //             population={country.population}
        //             borders={country.borders}>

        //         </Country>)
        //     }
        // </div> */}




        // This is How Send the Whole Object as a property to Child Component.....

        // < div className='country-container'> try it
        <div>
            <h2>All countries in the World From React</h2>
            <h3>Available: {countries.length}</h3>
            <div className='country-container bg-dark'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.numericCode}></Country>)
                    // Giving a unique Prop to each Child Component so that in terms of Changing react can identify that Exact Component and fix it...
                    // Unique key Should be a unique property of Course lik: id,or a code...
                }
            </div>
        </div >


    )
}


export default Countries;