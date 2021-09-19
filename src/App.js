import "./App.css";
import SideMenu from "./components/SideMenu";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Currency from "./pages/Currency";
import Login from "./pages/Login";
import Cryptho from "./pages/Cryptho";
import Golden from "./pages/Golden";
import Stocks from "./pages/Stocks";

function App() {

  return (
    <div className="App">
      <Router>
        <SideMenu />
        <div className="container">
          <Route path='/' exact component={Home}/>
          <Route path='/exchangerates' component={Currency} />
          <Route path='/login' component={Login} />
          <Route path='/cryptho' component={Cryptho} />
          <Route path='/golden' component={Golden} />
          <Route path='/stocks' component={Stocks} />
        </div>
      </Router>
    </div>
  )
}
export default App;