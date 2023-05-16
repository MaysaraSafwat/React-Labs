import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Header from './components/Header';
import {useState} from "react";
import Error from './components/Error';

function App() {
  const [students, setStudents] = useState([{id: 1 , name: "Omar" , age: "25"}])

    

  const AddStudent = (student) =>{
     setStudents([...students , student])
      console.log(students);
  }
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home AddStudent={AddStudent} students={students}/>}/>
        <Route path="/details/:id" element={<Details students={students}/>}/>
        <Route path="/profile" element={<Profile students={students}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
