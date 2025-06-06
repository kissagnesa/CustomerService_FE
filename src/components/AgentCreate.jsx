import { useNavigate } from "react-router-dom";

export const AgentCreate=()=>{
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Create new agent</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`http://localhost:5036/Agent/NewAgent`, {
                method: "POST",
                //bekerült ez az "újítás", ami miatt nem ment:
                headers: {
                    'Content-Type': 'application/json',
                },
                // itt figyeljetek, mert BAL oldalra kell amit a backend-be írunk,
                //míg jobb oldalra az űrlap-elemek pontos nevei kerültek, kicsivel!!!

                body: JSON.stringify({
                    name: event.target.elements.agentName.value                    
                }),
            })
            // ha kész, visszadob a főoldalra! Return-öl a backend-ről minden infót!
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">New agent's name:</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" />
                </div>
            </div>
            

            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
};