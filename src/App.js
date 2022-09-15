
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ListAgent from './Comp/ListAgent';


import AddAgent from './Comp/AddAgent';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Agentdetails from './Comp/Agentdetails';
import Updateagent from './Comp/Updateagent';
import Alert from './Comp/Alert';
import Home from './Comp/Home';
import {Link} from "react-router-dom"
import Nav from './Comp/Nav';
import Aide from './Comp/Aide';
import Adduser from './Comp/Adduser';
import Login from './Comp/Login';
function App() {

  return (
    <div className="App" id="na">
     
      <Router>
      <Nav />
      <Routes>
      < Route path="/" exact element={ <Login/>} />
      < Route path="/Accueil" exact element={ <Home/>} />
      < Route path="/Adduser" exact element={ <Adduser/>} />
      < Route path="/ListAgent" exact element={ <ListAgent/>} />
      < Route path="/AddAgent" exact element={ <AddAgent/>} />
      < Route path="/Agentdetails/:id" exact element={ <Agentdetails/>} />
      < Route path="/Updateagent/:id" exact element={ <Updateagent/>} />
      < Route path="/Aide" exact element={ <Aide/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
