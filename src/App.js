
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Layout/Header/index';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AdminExercise from './Pages/AdminExercise';
import Exercise from './Pages/Exercise';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/exercise/:id" element={<Exercise/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/exercise/:id" element={<AdminExercise/>}/>

      </Routes>

    </div>
  );
}

export default App;
