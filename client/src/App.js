import {  useEffect, useState } from "react";
import {Router, Switch, Route} from 'react-router-dom'
import history from "./browserHistory";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";

function App() {
  const [user, setUser] = useState()
  


  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Home sendUser={setUser}/>
          </Route>
        <Route exact path="/tasks">
          <ToDo sendUser={setUser}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
