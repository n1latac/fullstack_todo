import {  useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";

function App() {
  const [user, setUser] = useState()
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home sendUser={setUser}/>}/>
        <Route path="/tasks" element={<ToDo user={user}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
