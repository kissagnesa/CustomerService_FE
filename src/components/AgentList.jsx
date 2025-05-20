import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const AgentList=()=> {

    const[agents,setAgents] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        fetch("http://localhost:5036/Agent")
            .then((res) => res.json())
            .then((agents) => setAgents(agents))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Agent list</h2>
                    {agents.map((agent, index) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">Agent name: {agent.agentName}</p>                            
                            <div className="card-body">

                                <br />
                                <NavLink key="x" to={"/itmp/" + agents.id}>
                                    <i className="bi bi-eye"></i></NavLink> &nbsp;&nbsp;
                                <NavLink key="x" to={"/mod-itmp/" + agents.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="y" to={"/del-chess/" + agents.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}