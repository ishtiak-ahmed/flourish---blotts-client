import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {
    const [loggedInUser] = useContext(UserContext)
    const buyer = { buyer: loggedInUser.email }


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:1454/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(buyer)
        })
            .then(result => result.json())
            .then(data => setOrders(data))

    }, [])
    return (
        <>
            <Header></Header>
            <main>
                <h2>Your Order list</h2>
                {
                    orders.map(order => {
                        return (
                            <p>{order.name} , {order.price}</p>
                        )
                    })
                }
            </main>
        </>
    );
};

export default Order;