import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">

      <div className="glow-purple top-20 left-20"></div>
      <div className="glow-blue right-0 bottom-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <div className="glass inline-flex px-4 py-2 rounded-full text-sm mb-8">
            ✨ Track time effortlessly
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            Take Control
            <span className="block">
              Of Every Hour.
            </span>

            <span className="block text-violet-500 mt-2">
              Track Smarter.
            </span>

          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-xl leading-8">
            Track your work sessions, manage projects,
            analyze productivity and stay focused —
            all in one clean workspace.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-xl font-semibold">
              Start Free
            </button>

            <button className="glass px-7 py-4 rounded-xl flex items-center gap-2">
              View Demo
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Right Dashboard Mockup */}

        <div className="flex justify-center">

          <div className="glass rounded-3xl p-8 w-full max-w-md">

            <div className="flex justify-between items-center mb-8">

              <div>
                <h3 className="font-bold text-xl">
                  Today's Focus
                </h3>

                <p className="text-gray-500 text-sm">
                  June 2026
                </p>
              </div>

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <div className="space-y-4">

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>Design System</span>
                <span>2h 15m</span>
              </div>

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>Frontend Build</span>
                <span>1h 42m</span>
              </div>

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>DSA Practice</span>
                <span>1h 10m</span>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10">

              <p className="text-gray-400">
                Total Today
              </p>

              <h2 className="text-4xl font-bold mt-2 text-violet-500">
                5h 07m
              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}