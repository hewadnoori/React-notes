ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('root'));
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

ReactDOM.render(
    <div>
        <MainContent />

    </div>,
    document.querySelector('#root')
)