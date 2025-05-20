import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export const CustomerServiceDelPage=()=> {
    const params = useParams();
    const id = params.CustomerServiceId;
    const navigate = useNavigate();
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
                            <h5 className="card-title">Törlendő elem neve: {CustomerService.name}</h5>
                            <div className="lead">E-mail: {CustomerService.email}</div>                                                           
                        </div>
                              <form onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://chess.sulla.hu/chess/${id}`, {
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