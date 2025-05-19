import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

export const CustomerServiceModPage =()=> {
    const params = useParams();
    const id = params.CustomerServiceId;
    const navigate = useNavigate();
    const [CustomerService, setCustomerService] = useState({
        name: '',
        email: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7038/swagger/index.html${id}`);
                setCustomerService(response.data);
            } catch (error) {
                console.log('Error fetching CustomerService data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCustomerService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`https://CustomerService.sulla.hu/users/${id}`, CustomerService)
        .then(() => {
            navigate("/");
        })
        .catch(error => {
            console.log('Error updating CustomerService data:', error);
        });
};

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Egy CustomerService bejegyzés módosítása</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">CustomerService név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" defaultValue={CustomerService.name} onChange={handleInputChange}/>
                    </div>
                </div>
                <NavLink to='/'><i className='bi bi-backspace btn btn-danger'>Vissza</i></NavLink>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">E-mail</label>
                    <div className="col-sm-9">
                        <input type="date" name="birth_date" className="form-control" defaultValue={CustomerService.email} onChange={handleInputChange}/>
                    </div>
                </div>
                
                
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
};