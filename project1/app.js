import { Header } from "./Header";
function Facts() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
function Footer() {
    return (
        <footer>
            <small>© 2022 Hewad development All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Facts />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <div>
        <Page />
    </div>,
    document.getElementById('root')
)