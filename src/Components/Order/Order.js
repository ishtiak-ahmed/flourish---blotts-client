import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {
    const liveServer = 'https://flourish-and-blotts.herokuapp.com'

    const [loggedInUser] = useContext(UserContext)
    const buyer = { buyer: loggedInUser.email }


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(liveServer + '/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(buyer)
        })
            .then(result => result.json())
            .then(data => setOrders(data))

    }, [])
    const totalPrice = orders.reduce((total, book) => { return total + Number(book.price) }, 0)
    console.log(totalPrice)
    return (
        <>
            <Header></Header>
            <main>
                <h2>Your Order list</h2>
                <div className="table">
                    <table>
                        <thead>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Order Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </thead>
                        <tbody>


                            {
                                orders.map(order => {
                                    return (
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.author}</td>
                                            <td>{order.date}</td>
                                            <td>1</td>
                                            <td>${order.price}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>

                                <td><strong>Total: </strong></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>${totalPrice} </strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Order;