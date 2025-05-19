import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { CustomerServiceListPage } from "./CustomerServiceListPage";
import { CustomerServiceSinglePage } from "./CustomerServiceSinglePage";
import { CustomerServiceCreatePage } from "./CustomerServiceCreatePage";
import { CustomerServiceModPage } from "./CustomerServiceModPage";
import { CustomerServiceDelPage } from "./CustomerServiceDelPage";
import './App.css';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Hívások listája</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/new-itmp'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új hívások listája</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<CustomerServiceListPage />} />
        <Route path="/CustomerServiceSinglePage/:CallId" exact element={<CustomerServiceSinglePage />} />
        <Route path="/CustomerServiceCreatePage" exact element={<CustomerServiceCreatePage />} />
        <Route path="CustomerServiceModPage/:CallId" exact element={<CustomerServiceModPage />} />
        <Route path="/CustomerServiceDelPage/:CallId" exact element={<CustomerServiceDelPage />} />
      </Routes>
    </Router>
  );
}