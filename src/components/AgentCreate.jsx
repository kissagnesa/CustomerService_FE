import { useNavigate } from "react-router-dom";

export const CustomerServiceCreatePage=()=>{
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új kolléga felvétele</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`http://localhost:5036/Agent/NewAgent`, {
                method: "POST",
               
                headers: {
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({
                    agentName: event.target.elements.agentName.value                   
                }),
            })
            
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Új kolléga felvétele</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Név </label>
                <div className="col-sm-9">
                <input type="name" name="name" className="form-control" />
                </div>
            </div>           
            
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
};