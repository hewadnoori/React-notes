const Book = ({img, title, author}) => {
  //const {img, title, author} = props;
  //onClick, onMouseOver
  const clickHandler = ()=>{
    alert("hello world");
  };
  const complexExample = (author)=>{
    console.log(author);
  }
    return (
        <article className="book" onMouseOver={()=>{
          console.log(title);
        }}>
            <img src={img} alt="" />
            <h1 onClick={()=>console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>reference example</button>
            <button type="button" onClick={() => complexExample(author)}>more complex example</button> {/*must use another function on the complexExample function because we must pass the author as an arguement which runs the code instantly instead of onClick.*/}  
        </article>
    );
};
export default Book