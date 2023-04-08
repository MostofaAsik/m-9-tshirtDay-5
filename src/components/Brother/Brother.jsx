import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Brother</h3>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;