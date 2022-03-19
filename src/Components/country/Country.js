import React from 'react';

const Country = (props) => {
    return (
        <div>
            <div className='imported-style' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
                <h2>Name: {props.name}</h2>
                <h2>Capital: {props.capital}</h2>
            </div>
        </div>
    );
};

export default Country;
