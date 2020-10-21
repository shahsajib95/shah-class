import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce ((sum, courses)=> sum + courses.price, 0)
    const tax = total/10;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3 className="text-center">Courses</h3>
                    <p>Total Courses: <b>{cart.length}</b> </p>
                    <p>Cost: <b>{formatNumber(total)}</b> </p>
                    <p>Tax: <b>{formatNumber(tax)}</b> </p>
                    <hr></hr>
                    <p>Total: <b>{formatNumber(total + tax)}</b></p>
        </div>
    );
};

export default Cart;