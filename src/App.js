import './App.css';
import Login from './components/Login';
import Signing from './components/Signing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {
      username: "nandhu",
      password: "1234"
    },
    {
      username: "swathi",
      password: "1234"
    },
    {
      username: "paul",
      password: "1234"
    }
  ])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} />}></Route>
        <Route path='/home' element={<Landing />}></Route>
        <Route path='/signup' element={<Signing users={users} setUsers={setUsers} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
