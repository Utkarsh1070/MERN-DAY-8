import React, { useEffect, useState } from 'react';
import logo from './sea.jpg';

const CartOnline = () => {
    const [launch, setLaunch] = useState(0);

    const checkValue = () => (launch === 0 ? "00" : launch);
    const checkCartOnline = () => (launch === 0 ? "badge bg-warning text-dark m-3 p-3" : "badge bg-info text-dark m-3 p-3");

    const countIncrement = () => setLaunch(launch + 1);
    const countInc = () => setLaunch(launch + 10);
    const countDecrement = () => setLaunch(launch - 1);
    const resetCount = () => setLaunch(0);

    useEffect(() => {
        console.log(launch);
    }, [launch]);

    return (
        <div className="container mt-7">
            <h1>YOUR ITEM</h1><br />
            <h3>Quantity of your item</h3>
            <img src={logo} alt="Logo" style={{ height: '200px', width: '300px' }} /> <br />
            <button className="btn btn-success" onClick={countIncrement}>+1</button>
            <span className={checkCartOnline()}>{checkValue()}</span>
            <button className="btn btn-danger" onClick={countDecrement}>-1</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={countInc}> BULK +10</button><br />
            <button className="btn btn-warning" onClick={resetCount}>CLEAN</button>
        </div>
    );
};

export default CartOnline;
