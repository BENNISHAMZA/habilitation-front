import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import im from "../Comp/images/dd.png";
export default function Adduser() {
    const [Id, setid] = useState('')
    const [nom, setnom] = useState('')
    const [prenom, setprenom] = useState('')
    const [gmail, setgmail] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

 

 
    const handleClick = (e) => {
        e.preventDefault()
        const user = { Id, nom, prenom, gmail, username, password }
        console.log(user)
        fetch('http://localhost:9090/user/add', {
            method: "POST",
            

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)

        }).then(() => {
            console.log("OK")
           alert("Opération validée","aaaaaa")
        })

    }

 

  
  
    return (
        <div>
            <br /><br />
             
            <div className="container">
       
                <h4 > Inscription</h4>
                <hr  />
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">

                        <div className="card-body">
                            <form>
                           
                                <div className="form-group mb-2">
                                    <label className="form-label">Nom :</label>
                                    <input
                                    id="in"
                                        type="text"
                                        placeholder="Nom"
                                        name="nom"
                                   
                                        className="form-control"
                                        value={nom}
                                        onChange={(e) => setnom(e.target.value)}
                                       
                                     
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Prénom :</label>
                                    <input
                                    id="in"
                                        type="text"
                                        placeholder="Prénom"
                                        name="prenom"
                                        className="form-control"
                                        value={prenom}
                                        onChange={(e) => setprenom(e.target.value)}
                                    >
                                    </input>
                                </div>
                              

                               
                          
                                <div className="form-group mb-2">
                                    <label className="form-label">Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="gmail"
                                        className="form-control"
                                        value={gmail}
                                        
                                        onChange={(e) => setgmail(e.target.value)}
                                        id="in"
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nom d'utilisateur :</label>
                                    <input
                                        type="text"
                                        placeholder=" Nom d'utilisateur"
                                        name="username"
                                        className="form-control"
                                        value={username}
                                        
                                        onChange={(e) => setusername(e.target.value)}
                                        id="in"
                                    >
                                    </input>
                                </div>
                             
                                <div className="form-group mb-2">
                                    <label className="form-label">Mot de passe :</label>
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        
                                        onChange={(e) => setpassword(e.target.value)}
                                        id="in"
                                    >
                                    </input>
                                </div>
                             
                                <br />
                                <br />
                                <button id="jh"className="btn btn-" onClick={handleClick} type="submit">Ajouter </button>
                                <Link  className="btn btn-" id="ckt"   to={"/"} >Annuler</Link>
                              
                            </form> 

                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
            <img id="poi" src={im} alt="" />
        </div>
    );
};