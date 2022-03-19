import React from 'react';
import './country.css'

const Country = (props) => {
    const { flags, name, capital, region, population, borders } = props.country;

    return (
        // 1. The way to get by one props from the Parent Component.....

        // {/* <div>
        //     <div className='imported-style' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
        //         <h2>Name: {props.name}</h2>
        //         <h2>Capital: {props.capital}</h2>
        //         <h4>Region: {props.region}</h4>
        //         <h4>Population: {props.population}</h4>
        //         <li>Borders: {props.borders}</li>
        //     </div>
        // </div> */}




        // 2. Recommended way of getting the whole Object from Parent Component and then use it's property one by one.....

        // {/* <div className='imported-style' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
        //     <img style={{ width: '50%' }} src={props.country.flag} alt="" />
        //     <h2>Name: {props.country.name}</h2>
        //     <h2>Capital: {props.country.capital}</h2>
        //     <h4>Region: {props.country.region}</h4>
        //     <h4>Population: {props.country.population}</h4>
        //     <li>Borders: {props.country.borders}</li>
        // </div> */}




        // 3. Best way of Using destructuring Object That was sent by the Parent Component and 
        //    then use only variables.......

        <div className='imported-style-for-country' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75%', borderRadius: '25px', padding: '10px', color: 'blue' }}>
            <h2>{name}</h2>
            <img style={{ width: '50%' }} src={flags.png} alt="" />
            <h2>Capital: {capital}</h2>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
            <li>Borders: {borders}</li>
        </div>

    );
};

export default Country;
