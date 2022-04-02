import { Routes, Route } from "react-router-dom";
import DaosPage from "./pages/DaosPage";
import Home from "./pages/HomePage";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daos" element={<DaosPage />} />
      </Routes>
    </div>
  );
}

export default Router;
