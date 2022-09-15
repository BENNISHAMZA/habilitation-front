import React from "react";

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import im from "../Comp/images/dd.png";
import imc from "../Comp/images/rz.png"
const ListAgent = () => {
  const { id } = useParams();
  const [Agents, setAgents] = useState([])
  const getAllagents = async () => {
    const response = await fetch("http://localhost:8080/agent/allagent");
    const allposts = await response.json();
    console.log(allposts);
    setAgents(allposts);
  }
  useEffect(() => {
    getAllagents();
  }, []);
  const onDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/agent/${id}`)
      .then(() => {
        getAllagents();
      })
  }

  return (
    <div className="container">
      
      <br />
     
      <br />
      <h4 > <img id="hh" src={imc} alt="" /> Liste des agents</h4>
                <hr  />
      <table className="table table-bordered table-striped">
        <thead id="ti">
           <td></td>
          <th>Matricule</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Profil</th>
          <th>Entité</th>
          <th>Niveau</th>
          <th>Parcours</th>
          <th>Actions</th>

        </thead>
        
        <tbody id="tb">
          {
            Agents.map(agent => <tr key={agent.id}>
              <td>    <Link id="linkcol80"to={`/Agentdetails/${agent.matricule}`}className="btn btn-white" >Détails</Link></td>
              <td>{agent.matricule}</td>
              <td>{agent.nom}</td>
              <td>{agent.prenom}</td>
              <td>{agent.profil}</td>
              <td>{agent.entite}</td>
              <td>{agent.niveau}</td>
              <td>{agent.parcours}</td>
              <td>
          
              <Link id="linkcol80" className="btn btn-white" onClick={() => setAgents(Agents)} to={`/Updateagent/${agent.matricule}`} >Modifier</Link>
             
                <button  id="linkcol80"className="btn btn-white" style={{ marginLeft: "10px" }} onClick={() => onDelete(agent.matricule)}>Supprimer</button>
              </td>

            </tr>)
          }


        </tbody>
      </table>
     
      <Link className="btn " id="linkcol6"  to={"/AddAgent"} >Ajouter un  agent</Link>
      <img id="ff"  src={im} alt="" />
    </div>

  );

};
export default ListAgent;