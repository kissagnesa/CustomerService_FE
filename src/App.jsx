import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { AgentCreate } from "./components/AgentCreate";
import { AgentMod } from "./components/AgentMod";
import { AgentDel } from "./components/AgentDel";
import { AgentList } from "./components/AgentList";
import {AgentSingle} from "./components/AgentSingle";
import {CallList} from "./components/CallList";

import './App.css';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Agent list</span>
              </NavLink>
              </li>
               <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Call list</span>
              </NavLink>
              </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<AgentList />} />
        <Route path="/AgentSingle/:AgentId" exact element={<AgentSingle />} />
        <Route path="/AgentCreate" exact element={<AgentCreate />} />
        <Route path="AgentMod/:AgentId" exact element={<AgentMod />} />
        <Route path="/AgentDel/:AgentId" exact element={<AgentDel />} />
        <Route path="/CallList" exact element={<CallList />} />
      </Routes>
    </Router>
  );
}