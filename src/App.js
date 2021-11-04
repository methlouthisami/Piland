import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Componentes/Nav/Acceuil/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Componentes/Contact/Contact";
import Service from "./Componentes/Service/Service"
import Work  from "./Componentes/Work/Work"
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/contact" component={Contact}/>
        <Route path="/Service" component={Service} />
        <Route path="/Work" component={Work}/>

      </Router>

    </div>
  );
}

export default App;
