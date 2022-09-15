import React from "react";
import { Link } from "react-router-dom";
const Alert = () => {

    return(    
   
       
      
<div class="alert alert-success" role="alert" id="ale">
  Nouveau agent à était ajouter avec succès <Link to={"/ListAgent"} class="alert-link">Vérifier</Link>
</div>
       
        
        );
   };
   export default Alert;