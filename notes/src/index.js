import React from "react";
import ReactDOM from "react-dom/client";
import {books} from './components/books' 
//css
import './index.css'
import BookBook from './components/book'
//vars


function BookList() {
  return (
    <section className="booklist">
    {books.map((book)=>{
      const {img, title, author} = book;
      return(
        <BookBook key={book.id} {...book}></BookBook>
      );
        
      // return(  
      //   <div>
      //     <img src={book.img} alt="" />
      //     <h1>{book.title}</h1>
      //     <h4>{book.author}</h4>
      //   </div> 
      // );
    })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BookList />
    </React.StrictMode>
);