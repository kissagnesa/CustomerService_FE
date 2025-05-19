import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { CustomerServiceListPage } from "./CustomerServiceListPage";
import { CustomerServiceSinglePage } from "./CustomerServiceSinglePage";
import { CustomerServiceCreatePage } from "./CustomerServiceCreatePage";
import { CustomerServiceModPage } from "./CustomerServiceModPage";
import { CustomerServiceDelPage } from "./CustomerServiceDelPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
