import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {

    const angti = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <p> <small>{angti}</small></p>
        </div>
    );
};

export default Special;