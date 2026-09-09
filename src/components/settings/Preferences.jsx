import { useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";

export default function Preferences() {
  const [theme, setTheme] = useState("system");

  const themes = [
    {
      name: "Light",
      value: "light",
      icon: Sun,
    },
    {
      name: "Dark",
      value: "dark",
      icon: Moon,
    },
    {
      name: "System",
      value: "system",
      icon: Monitor,
    },
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Preferences
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Customize your TickFlow experience.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-slate-700 mb-3">
          Appearance
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {themes.map(({ name, value, icon: Icon }) => {

            const selected = theme === value;

            return (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  text-left
                  transition
                  ${
                    selected
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                <Icon size={19} />

                <span className="font-medium">
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}