import React, { useEffect, useState } from 'react';
import edit from '../../icons/edit.png';
import dustbin from '../../icons/dustbin.png';

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
                <td>${price}</td>
                <td>
                    <button style={{ backgroundColor: "green", border: 'none' }}><img src={edit} style={{ height: '15px' }} alt="" /></button>
                    <button onClick={() => handleDelete(_id)} style={{ backgroundColor: "red", border: 'none' }}><img src={dustbin} style={{ height: '15px' }} alt="" /></button>
                </td>
            </tr>
        )
    }
    return (
        <div className="manage-book">
            <h2>Manage Books</h2>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => <Book key={`${book._id}`} book={book}></Book>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ManageBook;