
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import im from "../Comp/images/dd.png";
import imk from "../Comp/images/cdk.png";
const ENTITE_MAX_SIZE = {
    'BPR': 3,
    'Succursale': 5,
    'Agence': 4,
}

export default function AddAgent() {
    const [matricule, setmatricule] = useState('')
    const [nom, setnom] = useState('')
    const [prenom, setprenom] = useState('')
    const [profil, setprofil] = useState('RDA')
    const [entite, setentite] = useState('')
    const [niveau, setniveau] = useState('Agence')
    const [parcours, setparcours] = useState('IMMO')
    const [showAlert, setShowAlert] = useState(false);

 
    const handleClick = (e) => {
        e.preventDefault()
        const agent = { matricule, nom, prenom, profil, entite, niveau, parcours }
        console.log(agent)
        fetch('http://localhost:8080/agent/add', {
            method: "POST",


            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(agent)

        }).then(() => {
            console.log("OK")
           alert("Opération validée","aaaaaa")
        })

    }

    const handleChangeNiveau = (value) => {
        const size = ENTITE_MAX_SIZE[value];
        setentite(entite.slice(0, size));
        setniveau(value);
    }

  
  
    return (
        <div>
            <br /><br />
             
            <div className="container">
       
                <h4 > <img id="hh" src={imk} alt="" /> Ajouter un agent</h4>
                <hr  />
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Nom:</label>
                                    <input
                                    id="in"
                                        type="text"
                                        placeholder="Tapez le nom"
                                        name="nom"
                                   
                                        className="form-control"
                                        value={nom}
                                        onChange={(e) => setnom(e.target.value)}
                                       
                                     
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Prénom:</label>
                                    <input
                                    id="in"
                                        type="text"
                                        placeholder="Tapez le prénom"
                                        name="prenom"
                                        className="form-control"
                                        value={prenom}
                                        onChange={(e) => setprenom(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Matricule:</label>
                                    <input
                                    id="in"
                                        type="text"
                                        placeholder="Tapez le matricule"
                                        name="matricule"
                                        className="form-control"
                                        value={matricule}
                                        onChange={(e) => setmatricule(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div name="form-group mb-2">
                                    <label className="form-label"> Profil</label>
                                    <select className="form-control" data-size="4"
                                        value={profil}
                                        onChange={(e) => setprofil(e.target.value)}
                                        id="in"
                                    >
                                        <option value="RDA">RDO</option>
                                        <option value="RDS">RDS</option>
                                        <option value="RMO">RMO</option>
                                        <option value="SMO">SMO</option>
                                        <option value="R3D">R3D</option>
                                        <option value="ACRC">ACRC</option>
                                    </select>
                                </div>
                                <div name="form-group mb-2">
                                    <label className="form-label"> Niveau:</label>
                                    <select className="form-control" data-size="4"
                                        value={niveau}
                                        onChange={(e) => handleChangeNiveau(e.target.value)}
                                        id="in"
                                    >

                                        <option value="Agence">Agence</option>
                                        <option value="Succursale">Succursale</option>
                                        <option value="BPR">BPR</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Entité:(1----9)</label>
                                    <input
                                        type="text"
                                        placeholder="Tapez l'entité"
                                        name="entite"
                                        className="form-control"
                                        value={entite}
                                        maxLength={ENTITE_MAX_SIZE[niveau]}
                                        onChange={(e) => setentite(e.target.value)}
                                        id="in"
                                    >
                                    </input>
                                </div>
                             
                               
                                <div name="form-group mb-2">
                                    <label className="form-label"> Parcours:</label>
                                    <select className="form-control" data-size="4"
                                        value={parcours}
                                        onChange={(e) => setparcours(e.target.value)}
                                        id="in"
                                    >
                                        <option value="IMMO">IMMO</option>
                                        <option value="CONSO">CONSO</option>
                                    </select>
                                </div>
                                <br />
                                <br />
                                <button id="btncol1"className="btn btn-white" onClick={handleClick} type="submit">Ajouter </button>
                                <Link  className="btn btn-white" id="linkcol3"   to={"/ListAgent"} >Liste des agents</Link>
                                <Link  className="btn btn-white" id="cd"   to={"/Accueil"} >Retour</Link>
                              
                            </form> 

                        </div>

                    </div>
                </div>
                <img id="cc" src={im} alt="" />
            </div>


        </div>
    );
};

