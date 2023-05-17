import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/artists/:id" element={<ArtistDetails/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
