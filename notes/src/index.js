import React from "react";
import ReactDOM from "react-dom/client";
//css
import './index.css'

//vars
const author = 'Christopher Denise';
const title = 'Knight Owl Kindle Edition';
const img = 'https://m.media-amazon.com/images/I/519mfvpS89S.jpg';
function BookList() {
  return (
    <section className="booklist">
      <Book title='little' author="sdad" job="developer"/>
      <Book title="random title" number={22}/>
    </section>
  );
};

const Book = (props) => {
    return (
        <article className="book">
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
            <p>{props.job}</p>
            <p>{props.number}</p>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BookList />
    </React.StrictMode>
);