import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Btn from './components/Btn';
import StBtn from './components/StBtn';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="pink pill lg" text="CSS" />
        <Button text="html" type="pill lg" />
        <Button text="Bootstrap" type="btn btn-primary" />
        <Btn type="button" className="primary" text="refined" />
        <StBtn />
        <h1>My App</h1>
      </header>
    </div>
  );
}

export default App;
