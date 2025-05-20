import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export const AgentDel=()=> {
    const params = useParams();
    const id = params.AgentId;
    const navigate = useNavigate();
    const[agent,setAgent] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`http://localhost:5036/Agent/DeleteAgent${id}`)
            const agent = await res.json();
            setAgent(agent);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);
 return (
    <div className="p-5 m-auto text-center content bg-lavender">
        {isPending || !agent.id ? (
            <div className="spinner-border"></div>
        ) : (
                        <div className="card p-3">
                            <div className="card-body">
                            <h5 className="card-title">Törlendő elem neve: {agent.agentName}</h5>                                                                                     
                        </div>
                              <form onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`http://localhost:5036/Agent/DeleteAgent${id}`, {
                method: "DELETE",
            })
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
                              <div>
<NavLink to={"/"}><button className="bi bi-backspace">&nbsp;Mégsem</button></NavLink>
&nbsp;&nbsp;
<button className="bi bi-trash3">&nbsp;Törlés</button></div></form>   
                        </div>
                    
                )}
            </div>
        );
};