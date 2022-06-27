import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import DaosPage from "./pages/DaosPage";
import TribunalPage from "./pages/TribunalPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tribunal/new" element={<TribunalPage />} />
      <Route path="/tribunal/:id" element={<TribunalPage />} />
      <Route path="/mint" element={<MintPage />} />
      <Route path="/mint/:slug" element={<MintPage />} />
      <Route path="/:slug/proposals" element={<DaosPage type="proposals" />} />
      <Route path="/:slug/about" element={<DaosPage type="about" />} />
      <Route path="/:slug/proposals/new" element={<DaosPage type="new" />} />
      <Route
        path="/:slug/proposal/:id"
        element={<DaosPage type="proposal" />}
      />
    </Routes>
  );
}

export default Router;
