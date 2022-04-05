import { Routes, Route } from "react-router-dom";
import DaosPage from "./pages/DaosPage";
import Home from "./pages/HomePage";
import MintPage from "./pages/MintPage";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daos" element={<DaosPage />} />
        <Route path="/mint" element={<MintPage />} />
      </Routes>
    </div>
  );
}

export default Router;
