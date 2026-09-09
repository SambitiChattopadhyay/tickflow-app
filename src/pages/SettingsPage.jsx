import { Settings } from "lucide-react";

import ProfileSettings from "../components/settings/ProfileSettings";
import Preferences from "../components/settings/Preferences";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-5xl mx-auto px-6 py-8 lg:px-10 lg:py-10">

        {/* Header */}
        <header className="mb-8">

          <div className="flex items-center gap-3 mb-3">

            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Settings size={22} />
            </div>

            <p className="text-sm font-medium text-blue-600">
              ACCOUNT & PREFERENCES
            </p>

          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Manage your account and customize TickFlow.
          </p>

        </header>


        {/* Settings Sections */}
        <div className="space-y-6">

          <ProfileSettings />

          <Preferences />

        </div>

      </div>

    </div>
  );
}