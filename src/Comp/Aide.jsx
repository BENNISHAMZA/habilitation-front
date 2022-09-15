import React from "react";
import {Link} from "react-router-dom"
import iml from "../Comp/images/uuu.png"
import yyy from "../Comp/images/em.png"
const Aide = () => {

    return(
        
        <div className="container">
            <br />
            <br />
            <h4 > <img id="hh" src={iml} alt="" />Contact </h4>
                <hr  />
                <label id="za" ><img id="vv" src={yyy} alt="" />Email:</label>
                <br />
                <br />
               
             <p><a  className="btn btn-dark" id="aa" href="mailto:XXXXYYYY@gmail.com">XXXXYYYY@gmail.com</a></p>
             <br />
             

             <p><a className="btn btn-dark"id="aa"  href="mailto:XXXXYYYY@gmail.com">XXXXYYYY@gmail.com</a></p>
            
        </div>
        
     );
};
export default Aide;