import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <Img></Img>
            <Title />
            <Author />
        </article>
    );
};

const Img = () => {
    return (
        <img src="https://m.media-amazon.com/images/I/519mfvpS89S.jpg" alt="" />
    );
};
const title = 'Knight Owl Kindle Edition'
const Title = () => {
    return (
        <h1>{title.toUpperCase()}</h1>
    );
};

const Author = () => {
    return (
        <h4 style={{ color: '#617d98', fontSize: '.75rem', marginTop: '0.25rem' }}>Christopher Denise</h4>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BookList />
    </React.StrictMode>
);