import React from "react";
import ReactDOM from "react-dom/client";
//css
import './index.css'

//vars
const firstBook = {
  author: 'Christopher Denise',
  title: 'Knight Owl Kindle Edition',
  img: 'https://m.media-amazon.com/images/I/519mfvpS89S.jpg',
} 
const secondBook = {
  author: 'Tara M. Stringfellow',
  title: 'Memphis: A Novel',
  img: 'https://m.media-amazon.com/images/I/51DLm21mCwL.jpg',
}
function BookList() {
  return (
    <section className="booklist">
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}>  
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero vitae magnam ratione ipsum voluptatibus quod! Sint nemo distinctio id quam natus labore repudiandae debitis, doloribus iste eius nesciunt facere!</p>
        <button>buy</button>
      </Book>
    </section>
  );
};
const Book = ({img, title, author, children}) => {
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
        </article>
    );
};
//TWO OTHER WAYS TO DECONSTRUCT
// const Book = (props) => {
//     return (
//         <article className="book">
//             <img src={props.img} alt="" />
//             <h1>{props.title}</h1>
//             <h4>{props.author}</h4>
//         </article>
//     );
// };

// const Book = (props) => {
//   const {img, title, author} = props;
//     return (
//         <article className="book">
//             <img src={img} alt="" />
//             <h1>{title}</h1>
//             <h4>{author}</h4>
//         </article>
//     );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BookList />
    </React.StrictMode>
);