import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
const localServer = 'http://localhost:1454'
const liveServer = 'https://flourish-and-blotts.herokuapp.com'
const server = liveServer

const Checkout = (props) => {
    const [loggedInUser] = useContext(UserContext)

    const history = useHistory()
    const { id } = useParams();
    const [book, setBook] = useState({})
    const { name, price } = book
    useEffect(() => {
        fetch(server + '/addtocart/' + id)
            .then(result => result.json())
            .then(data => setBook(data[0]))
    }, [])
    const handleAdd = (id) => {
        const item = { ...book }
        item.buyer = loggedInUser.email
        item.date = new Date().toDateString()
        console.log(item)
        fetch(server + '/addorder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => console.log(res))
        history.push('../../orders')
    }
    return (
        <>
            <Header></Header>
            <main>
                <h2>Add To Cart</h2>
                <table className="cart-table">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>1</td>
                        <td>${price}</td>
                    </tr>
                </table>
                <button onClick={() => handleAdd(book._id)}>Add To Cart</button>
            </main>
        </>
    );
};

export default Checkout;