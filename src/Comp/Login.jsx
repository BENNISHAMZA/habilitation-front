import React from "react";
import {Link} from "react-router-dom"

import { useNavigate } from "react-router-dom";

const Login = () => {
   
    return(
        
             <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                        <form >
                            <div className="form-group mb-2">
                                     <label className="form-label">Nom d'utilisateur :</label>
                                    <input type="text"
                                    placeholder="Tapez le nom d'utilisateur"
                                    name="user"
                                    className="form-control"
                                        />
                            </div>
               
                            <div className="form-group mb-2">
                            <label className="form-label">Mot de passe :</label>
                                    <input type="password"
                                    placeholder="Tapez le mot de passe"
                                    name="user"
                                    className="form-control"
                                        />
                            </div>
                  
                         </form>
                         <Link  className="btn btn-dark"    to={"/ListAgent"} >Se connecter</Link>
                        </div>
                       
                    </div>
                   
                
                </div>
              
             </div>
  
        
     );
};
export default Login;