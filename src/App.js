import { Routes, Route } from "react-router-dom";

import './App.scss';
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import Sidebar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
