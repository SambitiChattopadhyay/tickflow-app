import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import WorkspacePage from "./pages/WorkspacePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
       <Route path="/workspace" element={<WorkspacePage />}/>
       <Route path="/dashboard" element={<DashboardPage />}/>
    </Routes>
  );
}

export default App;