import {  useEffect, useState } from "react";
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import { history } from "./BrowserHistory";

function App() {
  const [user, setUser] = useState()
  
  console.log('app')

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Home sendUser={setUser}/>}/>
        <Route path="/tasks" element={<ToDo sendUser={setUser} user={user}/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
