import "./App.css";
import SideMenu from "./components/SideMenu";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Currency from "./pages/Currency";

function App() {

  return (
    <div className="App">
      <Router>
        <SideMenu />
        <div className="container">
          <Route path='/' exact component={Home}/>
          <Route path='/currency' component={Currency} />
        </div>
      </Router>
    </div>
  )
}
export default App;