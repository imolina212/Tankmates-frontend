import { Routes, Route } from "react-router-dom";

// import NavBar from "./components/navbar/NavBar";
import './App.scss';
import SpeciesList from './components/speciesList/SpeciesList';
import SpeciesDetailPage from './pages/SpeciesDetailPage'
import Sidebar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<SpeciesList />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
