import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CustomerServiceListPage=()=> {

    const[calls,setCalls] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:7038/swagger/index.html")
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
                    <h2>ITMP bejegyzések</h2>
                    {calls.map((call, index) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">ITMP bejegyzés neve: {calls.customerName}</p>
                            <p className="text-danger">E-mail cím {calls.agentName}</p>
                            <div className="card-body">

                                <br />
                                <NavLink key="x" to={"/itmp/" + calls.id}>
                                    <i className="bi bi-eye"></i></NavLink> &nbsp;&nbsp;
                                <NavLink key="x" to={"/mod-itmp/" + calls.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="y" to={"/del-chess/" + calls.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}