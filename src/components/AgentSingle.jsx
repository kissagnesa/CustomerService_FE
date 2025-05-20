import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export const AgentSingle =()=> {

    const params = useParams();
    const id = params.AgentId;
    const[agents,setAgents] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`http://localhost:5036/swagger${id}`)
            const agents = await res.json();
            setAgents(agents);
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
            {isPending || !agents.agentId ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="text-dark">Agent id: {agents.agentId}</h5>                       
                                <p className="text-dark">Agent name: {agents.agentName}</p>
                                
                                  </div>
                                  <div><NavLink to="/"><i className="bi bi-backspace btn btn-danger"></i></NavLink>    
<NavLink key="y" to={"/mod-Agent/" + agents.agentId}><i className="bi bi-pencil btn btn-primary"></i></NavLink></div>   
                            </div>
                        
                    )}
                </div>
            );
}