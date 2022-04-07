import { Routes, Route } from "react-router-dom";
import DaosPage from "./pages/DaosPage";
import Home from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import ProposalsPage from "./pages/ProposalsPage";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daos" element={<DaosPage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/:slug/proposals" element={<ProposalsPage />} />
      </Routes>
    </div>
  );
}

export default Router;
