import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import DaosPage from "./pages/DaosPage";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daos" element={<DaosPage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route
          path="/:slug/proposals"
          element={<DaosPage type="proposals" />}
        />
        <Route path="/:slug/about" element={<DaosPage type="about" />} />
      </Routes>
    </div>
  );
}

export default Router;
