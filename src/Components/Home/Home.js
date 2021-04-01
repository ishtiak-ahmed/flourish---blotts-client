import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
const localServer = 'http://localhost:1454'
const liveServer = 'https://flourish-and-blotts.herokuapp.com'
const server = liveServer

const Home = () => {
    const histoy = useHistory()

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
        const { name, author, price, image, _id } = props.book
        return (
            <div className="book-item">
                <div className="cover">
                    <img src={image} alt={name} />
                </div>
                <h3 className='title'>{name}</h3>
                <p>{author}</p>
                <div className="action">
                    <span>Price: ${price}</span>
                    <button onClick={() => handleAddToCart(_id)}>Add To Cart</button>
                </div>
            </div>
        )
    }
    const handleAddToCart = (id) => {
        console.log('checking prouduct out with id ', id)
        histoy.push('/addtocart/' + id)
    }
    return (
        <>
            <Header></Header>
            <main>
                <div className="search-area">
                    <input type="text" placeholder="search a book" />
                    <button>Search</button>
                </div>
                <section className="books">
                    {
                        books.map((book, index) => <Book key={index} book={book}></Book>)
                    }
                </section>
            </main>
        </>
    );
};





export default Home;