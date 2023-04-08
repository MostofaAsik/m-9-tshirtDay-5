import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p>GrandaPa money:{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000Tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Anabil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;