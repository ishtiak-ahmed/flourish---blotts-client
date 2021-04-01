import React, { useEffect, useState } from 'react';

const localServer = 'http://localhost:1454'
const liveServer = 'https://flourish-and-blotts.herokuapp.com'
const server = liveServer
const ManageBook = () => {
    const handleDelete = (id) => {
        const url = server + '/delete/' + id
        console.log(url)
        fetch(url, { method: "DELETE" })
            .then(res => res.json())
            .then(result => console.log('deleted succesfully'))
    }

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(server + '/books')
            .then(result => result.json())
            .then(data => {
                setBooks(data)
            }
            )
    }, [])

    const Book = (props) => {
        const { name, author, price, _id } = props.book
        return (
            <tr>
                <td>{name}</td>
                <td>{author}</td>
                <td>{price}</td>
                <td>
                    <button>edit</button>
                    <button onClick={() => handleDelete(_id)}>X</button>
                </td>
            </tr>
        )
    }
    return (
        <div>
            <h3>Manage Books</h3>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {
                    books.map((book) => <Book key={`${book._id}`} book={book}></Book>)
                }
            </table>

        </div>
    );
};



export default ManageBook;