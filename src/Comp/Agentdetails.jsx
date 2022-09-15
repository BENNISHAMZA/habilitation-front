import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import im from "../Comp/images/dd.png";
const Agentdetails = ({match}) => {
    const {id} = useParams();
    const [agent, setAgents] = useState({})
    const getAgent = async () => {
        const response = await fetch("http://localhost:8080/agent/" +id );
        const post = await response.json();
        console.log(post);
        setAgents(post);

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
    <div className="container">
      <br />
      <h2 className="text-center" >Les détails de l'agent</h2>
      <br />
         <h5 >L'agent : {agent.nom}  {agent.prenom}</h5>
         <hr id="py" />
         <table className="table table-bordered table-striped">
        <thead id="ti">
          
          <th>Matricule</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Profil</th>
          <th>Entité</th>
          <th>Niveau</th>
          <th>Parcours</th>
        

        </thead>
        <tbody id="tb">
       
             <tr key={agent.id}>
          
              <td>{agent.matricule}</td>
              <td>{agent.nom}</td>
              <td>{agent.prenom}</td>
              <td>{agent.profil}</td>
              <td>{agent.entite}</td>
              <td>{agent.niveau}</td>
              <td>{agent.parcours}</td>
              
              </tr>
              </tbody>
      </table>
    <Link id="linkcol2"className="btn btn-white"  to={"/ListAgent"} >Retour</Link>

    <Link className="btn btn-white"id="linkcol4" onClick={() => setAgent(Agents)} to={`/Updateagent/${agent.matricule}`} >Modifier l'agent</Link>
    <img id="cc" src={im} alt="" />
    </div>
   

 
          
     
           
        
           
          
        
  );
};
export default Agentdetails;