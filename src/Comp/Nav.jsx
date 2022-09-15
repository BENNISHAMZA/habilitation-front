import React from "react";
import {Link} from "react-router-dom"
import img2 from "../Comp/images/xk.jfif";
import imt from "../Comp/images/aid.png";
const Nav = () => {

    return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h5 id="rt">Gestsion des agents</h5> 
        <Link class="navbar-brand"id="ri" to="/Aide">Aide ?</Link>
      </nav>
        
     );
};
export default Nav;