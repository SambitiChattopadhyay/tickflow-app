import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FolderKanban,
  CheckSquare,
  Timer,
  BarChart3,
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-6 pt-32">

        <div className="glow-purple top-20 left-20"></div>
        <div className="glow-blue bottom-0 right-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            {/* <div className="glass inline-flex px-4 py-2 rounded-full mb-8 text-sm">
              Productivity made simple
            </div> */}

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Take Control
              <span className="block">
                Of Your Time.
              </span>

              <span className="block text-violet-500">
                Stay Productive.
              </span>

            </h1>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-8">
              TickFlow helps you organize tasks,
              manage projects and track your work
              from one clean workspace.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-violet-600 hover:bg-violet-500 px-6 py-4 rounded-xl font-semibold">
                Get Started
              </button>

              <button className="glass px-6 py-4 rounded-xl">
                Learn More
              </button>

            </div>

          </div>

          {/* Preview */}

          <div className="glass rounded-3xl p-8">

            <h3 className="font-bold text-2xl mb-8">
              TickFlow Dashboard
            </h3>

            <div className="space-y-4">

              <div className="glass rounded-xl p-4 flex items-center gap-3">
  <FolderKanban
    size={20}
    className="text-violet-500"
  />
  <span>Projects</span>
</div>

<div className="glass rounded-xl p-4 flex items-center gap-3">
  <CheckSquare
    size={20}
    className="text-violet-500"
  />
  <span>Tasks</span>
</div>

<div className="glass rounded-xl p-4 flex items-center gap-3">
  <Timer
    size={20}
    className="text-violet-500"
  />
  <span>Time Tracking</span>
</div>

<div className="glass rounded-xl p-4 flex items-center gap-3">
  <BarChart3
    size={20}
    className="text-violet-500"
  />
  <span>Reports</span>
</div> 

            </div>

            <div className="border-t border-white/10 mt-8 pt-6">
              <p className="text-gray-400">
                Organize. Track. Improve.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHAT YOU CAN DO */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Everything You Need To Stay Productive
          </h2>

          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            Built to help you organize work,
            track progress and stay focused.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Time Tracking
              </h3>

              <p className="text-gray-400 mt-4">
                Record work sessions and understand
                how your time is spent.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Task Management
              </h3>

              <p className="text-gray-400 mt-4">
                Organize tasks into projects and
                keep everything structured.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold">
                Productivity Insights
              </h3>

              <p className="text-gray-400 mt-4">
                Review activity and improve
                your workflow over time.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="py-32 px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          How TickFlow Works
        </h2>

        <p className="text-center text-gray-400 mt-4">
          A simple workflow built around productivity.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

          <div className="glass rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              01. Organize
            </h3>

            <p className="text-gray-400">
              Create projects and keep your work
              properly structured.
            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              02. Track
            </h3>

            <p className="text-gray-400">
              Track tasks and monitor your
              progress throughout the day.
            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              03. Improve
            </h3>

            <p className="text-gray-400">
              Analyze reports and discover
              better productivity habits.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="py-32 px-6"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Core Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

          <div className="glass rounded-3xl p-8">
            Real-Time Time Tracking
          </div>

          <div className="glass rounded-3xl p-8">
            Project Management
          </div>

          <div className="glass rounded-3xl p-8">
            Task Organization
          </div>

          <div className="glass rounded-3xl p-8">
            Weekly Reports
          </div>

          <div className="glass rounded-3xl p-8">
            Focus Sessions
          </div>

          <div className="glass rounded-3xl p-8">
            Dark Mode
          </div>

        </div>

      </section>

      {/* BUILT FOR */}

      <section className="py-32 px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Built For Everyone Who Values Time
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 mt-16">

          <div className="glass rounded-2xl p-6 text-center">
            Students
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            Developers
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            Freelancers
          </div>

          <div className="glass rounded-2xl p-6 text-center">
            Creators
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="py-32 px-6"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto mt-16 space-y-6">

          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold">
              Is TickFlow free?
            </h3>

            <p className="text-gray-400 mt-2">
              Yes, the core functionality is free to use.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold">
              Can I manage multiple projects?
            </h3>

            <p className="text-gray-400 mt-2">
              Yes, you can organize work across multiple projects.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold">
              Is the app mobile responsive?
            </h3>

            <p className="text-gray-400 mt-2">
              Yes, TickFlow is designed to work across devices.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32 px-6">

        <div className="glass rounded-3xl p-12 max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Ready To Take Control Of Your Time?
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Create an account and start organizing
            your work with TickFlow.
          </p>

          <button className="bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-xl mt-10 font-semibold">
            Get Started
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}