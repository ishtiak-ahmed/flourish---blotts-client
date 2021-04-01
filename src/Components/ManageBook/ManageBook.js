import React, { useEffect, useState } from 'react';

const localServer = 'http://localhost:1454'
const liveServer = 'https://flourish-and-blotts.herokuapp.com'
const server = liveServer
const ManageBook = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(server + '/books')
            .then(result => result.json())
            .then(data => {
                setBooks(data)
                console.log(data)
            }
            )
    }, [])
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
                    books.map((book, index) => <Book key={index} book={book}></Book>)
                }
            </table>

        </div>
    );
};

const Book = (props) => {
    const { name, author, price } = props.book
    return (
        <tr>
            <td>{name}</td>
            <td>{author}</td>
            <td>{price}</td>
            <td>
                <button>edit</button>
                <button>X</button>
            </td>
        </tr>
    )
}

export default ManageBook;