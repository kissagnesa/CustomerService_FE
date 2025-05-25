import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CallList=()=> {

    const[calls,setCalls] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        fetch("http://localhost:5036/Call/AllCalls")
            .then((res) => res.json())
            .then((calls) => setCalls(calls))
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
                    <h2>Call list</h2>
                    {calls.map((call, index) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">Call id: {call.callId}</p>  
                            <p className="text-dark">Call date: {call.callDate}</p>                            
                            <div className="card-body">

                                <br />
                                <NavLink key="x" to={"/calllist/" + call.id}>
                                    <i className="bi bi-eye"></i></NavLink> &nbsp;&nbsp;
                                <NavLink key="x" to={"/calllist/" + call.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="y" to={"/calllist/" + call.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}