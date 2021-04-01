import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';


const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:1454/books')
            .then(result => result.json())
            .then(data => {
                setBooks(data)
                console.log(data)
            }
            )
    }, [])
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

const Book = (props) => {
    const { name, author, price, image } = props.book
    return (
        <div className="book-item">
            <div className="cover">
                <img src={image} alt={name} />
            </div>
            <h3 className='title'>{name}</h3>
            <p>{author}</p>
            <div className="action">
                <span>Price: ${price}</span>
                <button>Buy Now</button>
            </div>
        </div>
    )
}



export default Home;