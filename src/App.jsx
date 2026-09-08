import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import WorkspacePage from "./pages/WorkspacePage";
import DashboardPage from "./pages/DashboardPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ReportsPage from "./pages/ReportsPage";
import CalendarPage from "./pages/CalendarPage";
import GoalsPage from "./pages/GoalsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
       <Route path="/workspace" element={<WorkspacePage />}/>
       <Route path="/dashboard" element={<DashboardPage />}/>
       <Route path="/activities" element={<ActivitiesPage />} />
       <Route path="/reports" element={<ReportsPage />} />
       <Route path="/calendar" element={<CalendarPage />} />
       <Route path="/goals" element={<GoalsPage />} />
       <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;