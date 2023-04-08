import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ ring }) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;