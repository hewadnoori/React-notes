ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById('root'));//instead of using class, you use className
ReactDOM.render(
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>, document.getElementById('root'));
//first custom component in react!
function MainContent() {
    return (
        <div>
            <p>first component</p>
            <h3>this is my first component.</h3>
            <p>components can only have one parent elements but unlimited child elements so just wrap everything in a div!</p>
        </div>
    )
}

function Navbar() {
    return (
        <nav>
            <h1>Bamboo Grove</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.querySelector('#root')
)

// const h1 = document.createElement('h1');
// h1.textContent = 'this is an imperative way to program'
// h1.className = 'header'
// document.getElementById('root').append(h1);

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);

// ReactDOM.render(page, document.getElementById('root')); //this rewrites the previous render


ReactDom.render(
    <div>
        <Navbar />
    </div>,
    document.getElementById('root'));
