import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import './App.scss';
import SpeciesList from './components/speciesList/SpeciesList';
import SpeciesDetailPage from './pages/SpeciesDetailPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SpeciesList />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
