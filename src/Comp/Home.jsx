import React from "react";
import {Link} from "react-router-dom"
import img33 from "../Comp/images/oo.png";
import im from "../Comp/images/dd.png";

const Home = () => {

    return(
    
      <div className="wrapper" >
      
       <br />
       <h4  id="mm"><img id ="gg"src={img33} alt="" /> Accueil </h4>
     <hr id="pi" />
       <div>
       <Link className="btn btn-dark" id="aa"  to={"/AddAgent"} > Ajouter un  agent</Link>
       <Link className="btn btn-dark" id="aa"  to={"/ListAgent"} >Voir la liste des agents</Link>
      

     
       <hr  id="pi" />
       <img id="ee" src={im} alt="" />
       </div>
      </div>
        
     );
};
export default Home;