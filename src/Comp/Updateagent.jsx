import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import im from "../Comp/images/dd.png";
import iml from "../Comp/images/bk.png";
const ENTITE_MAX_SIZE = {
    'BPR': 3,
    'Succursale': 5,
    'Agence': 4,
}

const Updateagent = (match) => {
    const { id } = useParams();
    const [agent, setAgents] = useState({})
    const [matricule, setmatricule] = useState('')
    const [nom, setnom] = useState('')
    const [prenom, setprenom] = useState('')
    const [profil, setprofil] = useState('RDA')
    const [entite, setentite] = useState('')
    const [niveau, setniveau] = useState('Agence')
    const [parcours, setparcours] = useState('IMMO')
    const getAgent = async () => {
        const response = await fetch("http://localhost:8080/agent/" + id);
        const post = await response.json();
        console.log(post);
        setAgents(post);

    }

    const setData = (setAgents) => {
        let { nom, prenom, matricule, profil, entite, niveau, parcours } = setAgents;
        localStorage.setItem('Nom', nom);
        localStorage.setItem('Prenom', prenom);
        localStorage.setItem('Matricule', matricule);
        localStorage.setItem('Profil', profil);
        localStorage.setItem('Entite', entite);
        localStorage.setItem('Niveau', niveau);
        localStorage.setItem('Parcours', parcours);
    }
    const updateAPIData = () => {
        axios.put(`http://localhost:8080/agent/"${id}`, {
            nom,
            prenom,
            matricule: id,
            profil,
            entite,
            niveau,
            parcours
        })
    }


    useEffect(() => {
        setmatricule(localStorage.getItem('matricule'))
        setnom(localStorage.getItem('Nom'));
        setprenom(localStorage.getItem('Prenom'));
        setprofil(localStorage.getItem('Profil'))
        setentite(localStorage.getItem('Entite'));
        setniveau(localStorage.getItem('Niveau'));
        setparcours(localStorage.getItem('Parcours'))
    }, []);

    const handleChangeNiveau = (value) => {
        console.log('hahahah')
        const size = ENTITE_MAX_SIZE[value];
        setentite(entite && entite.slice(0, size));
        setniveau(value);
    }
   
 
    
  
    const [Agents, setAgent] = useState([])
    const getAllagents = async () => {
      const response = await fetch("http://localhost:8080/agent/allagent");
      const allposts = await response.json();
      console.log(allposts);
      setAgent(allposts);
    }
    useEffect(() => {
      getAllagents();
    }, []);
    useEffect(() => {
        getAgent();
    }, []);
    return (

        <div>
            <br /><br />
            <div className="container">
            <h4 > <img id="hh" src={iml} alt="" /> Modifier l'agent: {agent.nom}  {agent.prenom}</h4>
                <hr  />
                
                <br />
               
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Matricule:</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="Matricule"
                                        className="form-control"
                                        value={id}
                                        onChange={(e) => setmatricule(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Nom:</label>
                                    <input
                                        type="text"
                                        placeholder={agent.nom}
                                        name="nom"
                                        className="form-control"
                                        value={nom}
                                        onChange={(e) => setnom(e.target.value)}
                                    >

                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Prenom:</label>
                                    <input
                                        type="text"
                                        placeholder={agent.prenom}
                                        name="prenom"
                                        className="form-control"
                                        value={prenom}
                                        onChange={(e) => setprenom(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div name="form-group mb-2">
                                    <label className="form-label"> Profil</label>
                                    <select className="form-control" data-size="4"
                                        value={profil}
                                        onChange={(e) => setprofil(e.target.value)}
                                      

                                    >

                                        <option value="RDO">RDA</option>
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
                                        placeholder={agent.entite}
                                        name="entite"
                                        className="form-control"
                                        value={entite}
                                        maxLength={ENTITE_MAX_SIZE[niveau]}
                                        onChange={(e) => setentite(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div name="form-group mb-2">
                                    <label className="form-label"> Parcours:</label>
                                    <select className="form-control" data-size="4"
                                        value={parcours}
                                        onChange={(e) => setparcours(e.target.value)}

                                    >

                                        <option value="IMMO">IMMO</option>
                                        <option value="CONSO">CONSO</option>
                                    </select>
                                </div>
                                <br />
                                <br />
                                <button id="linkcol2" className="btn btn-white" type="submit" onClick={updateAPIData} >Modifier </button>
                                
                                <Link className="btn btn-white" id="linkcol15" to={"/ListAgent"} >Annuler</Link>

                            </form>

                        </div>

                    </div>
                </div>
                <img id="cc" src={im} alt="" />
            </div>
        </div>


    );
};
export default Updateagent;