import { Routes, Route } from "react-router-dom";

// import NavBar from "./components/navbar/NavBar";
import './App.scss';
import Home from "./pages/home/Home";
import SpeciesDetailPage from './pages/SpeciesDetailPage'
import Sidebar from "./components/sideBar/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
