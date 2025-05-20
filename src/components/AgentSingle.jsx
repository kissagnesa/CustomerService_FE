import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export const AgentSingle =()=> {

    const params = useParams();
    const id = params.CustomerServiceId;
    const[CustomerService,setCustomerService] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://localhost:7038/swagger/index.html${id}`)
            const CustomerServicek = await res.json();
            setCustomerService(CustomerServicek);
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
            {isPending || !CustomerService.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="text-dark">CustomerService bejegyzés neve: {CustomerService.name}</h5>
                            <div className="text-danger">E-mail cím: {CustomerService.email}</div>
                                
                                
                                  </div>
                                  <div><NavLink to="/"><i className="bi bi-backspace btn btn-danger"></i></NavLink>    
<NavLink key="y" to={"/mod-CustomerService/" + CustomerService.id}><i className="bi bi-pencil btn btn-primary"></i></NavLink></div>   
                            </div>
                        
                    )}
                </div>
            );
}