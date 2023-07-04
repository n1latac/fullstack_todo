import {  useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";

function App() {
  const [user, setUser] = useState()
  
  console.log('app')

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home sendUser={setUser}/>}/>
        <Route path="/tasks" element={<ToDo sendUser={setUser} user={user}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
