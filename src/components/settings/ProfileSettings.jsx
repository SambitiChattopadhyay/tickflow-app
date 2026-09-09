import { useState } from "react";
import { User, Mail, Save } from "lucide-react";

export default function ProfileSettings() {
  const [username, setUsername] = useState("Samwati");
  const [email, setEmail] = useState("samwati@example.com");

  const handleSave = () => {
    console.log({
      username,
      email,
    });
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          <User size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Profile
          </h2>

          <p className="text-sm text-slate-500">
            Manage your profile information.
          </p>
        </div>
      </div>

      <div className="space-y-5">

        <div>
          <label className="text-sm font-medium text-slate-700">
            Username
          </label>

          <div className="relative mt-2">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <div>
          <label className="text-sm font-medium text-slate-700">
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>
    </div>
  );
}
