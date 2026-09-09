// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// import {
//   FolderKanban,
//   CheckSquare,
//   Timer,
//   BarChart3,
// } from "lucide-react";

// export default function LandingPage() {
//   const navigate = useNavigate();
//   return (   //Everything inside return() is what appears on screen.
//     <> //React components must return one parent.instead of div
//       <Navbar />

//       {/* HERO */}

//       <section className="relative min-h-screen flex items-center px-6 pt-32">

//         <div className="glow-purple top-20 left-20"></div>
//         <div className="glow-blue bottom-0 right-0"></div>

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

//           <div>

//             {/* <div className="glass inline-flex px-4 py-2 rounded-full mb-8 text-sm">
//               Productivity made simple
//             </div> */}

//             <h1 className="text-5xl md:text-7xl font-black leading-tight">

//               Take Control
//               <span className="block">
//                 Of Your Time.
//               </span>

//               <span className="block text-violet-500">
//                 Stay Productive.
//               </span>

//             </h1>

//             <p className="mt-8 text-gray-400 text-lg max-w-xl leading-8">
//               TickFlow helps you organize tasks,
//               manage projects and track your work
//               from one clean workspace.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-10">
//             <button
//             onClick={() => navigate("/auth")}
//             className="bg-violet-600 hover:bg-violet-500 px-6 py-4 rounded-xl font-semibold"
//             >
//             Get Started
//             </button>

//               <button className="glass px-6 py-4 rounded-xl">
//                 Learn More
//               </button>

//             </div>

//           </div>

//           {/* Preview */}

//           <div className="glass rounded-3xl p-8">

//             <h3 className="font-bold text-2xl mb-8">
//               TickFlow Dashboard
//             </h3>

//             <div className="space-y-4">

//               <div className="glass rounded-xl p-4 flex items-center gap-3">
//   <FolderKanban
//     size={20}
//     className="text-violet-500"
//   />
//   <span>Projects</span>
// </div>

// <div className="glass rounded-xl p-4 flex items-center gap-3">
//   <CheckSquare
//     size={20}
//     className="text-violet-500"
//   />
//   <span>Tasks</span>
// </div>

// <div className="glass rounded-xl p-4 flex items-center gap-3">
//   <Timer
//     size={20}
//     className="text-violet-500"
//   />
//   <span>Time Tracking</span>
// </div>

// <div className="glass rounded-xl p-4 flex items-center gap-3">
//   <BarChart3
//     size={20}
//     className="text-violet-500"
//   />
//   <span>Reports</span>
// </div> 

//             </div>

//             <div className="border-t border-white/10 mt-8 pt-6">
//               <p className="text-gray-400">
//                 Organize. Track. Improve.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* WHAT YOU CAN DO */}

//       <section className="py-24 px-6">

//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-4xl md:text-5xl font-bold text-center">
//             Everything You Need To Stay Productive
//           </h2>

//           <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
//             Built to help you organize work,
//             track progress and stay focused.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mt-16">

//             <div className="glass rounded-3xl p-8">
//               <h3 className="text-2xl font-bold">
//                 Time Tracking
//               </h3>

//               <p className="text-gray-400 mt-4">
//                 Record work sessions and understand
//                 how your time is spent.
//               </p>
//             </div>

//             <div className="glass rounded-3xl p-8">
//               <h3 className="text-2xl font-bold">
//                 Task Management
//               </h3>

//               <p className="text-gray-400 mt-4">
//                 Organize tasks into projects and
//                 keep everything structured.
//               </p>
//             </div>

//             <div className="glass rounded-3xl p-8">
//               <h3 className="text-2xl font-bold">
//                 Productivity Insights
//               </h3>

//               <p className="text-gray-400 mt-4">
//                 Review activity and improve
//                 your workflow over time.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* HOW IT WORKS */}

//       <section className="py-32 px-6">

//         <h2 className="text-4xl md:text-5xl font-bold text-center">
//           How TickFlow Works
//         </h2>

//         <p className="text-center text-gray-400 mt-4">
//           A simple workflow built around productivity.
//         </p>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

//           <div className="glass rounded-3xl p-8">

//             <h3 className="text-2xl font-bold mb-4">
//               01. Organize
//             </h3>

//             <p className="text-gray-400">
//               Create projects and keep your work
//               properly structured.
//             </p>

//           </div>

//           <div className="glass rounded-3xl p-8">

//             <h3 className="text-2xl font-bold mb-4">
//               02. Track
//             </h3>

//             <p className="text-gray-400">
//               Track tasks and monitor your
//               progress throughout the day.
//             </p>

//           </div>

//           <div className="glass rounded-3xl p-8">

//             <h3 className="text-2xl font-bold mb-4">
//               03. Improve
//             </h3>

//             <p className="text-gray-400">
//               Analyze reports and discover
//               better productivity habits.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* FEATURES */}

//       <section
//         id="features"
//         className="py-32 px-6"
//       >

//         <h2 className="text-4xl md:text-5xl font-bold text-center">
//           Core Features
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

//           <div className="glass rounded-3xl p-8">
//             Real-Time Time Tracking
//           </div>

//           <div className="glass rounded-3xl p-8">
//             Project Management
//           </div>

//           <div className="glass rounded-3xl p-8">
//             Task Organization
//           </div>

//           <div className="glass rounded-3xl p-8">
//             Weekly Reports
//           </div>

//           <div className="glass rounded-3xl p-8">
//             Focus Sessions
//           </div>

//           <div className="glass rounded-3xl p-8">
//             Dark Mode
//           </div>

//         </div>

//       </section>

//       {/* BUILT FOR */}

//       <section className="py-32 px-6">

//         <h2 className="text-4xl md:text-5xl font-bold text-center">
//           Built For Everyone Who Values Time
//         </h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 mt-16">

//           <div className="glass rounded-2xl p-6 text-center">
//             Students
//           </div>

//           <div className="glass rounded-2xl p-6 text-center">
//             Developers
//           </div>

//           <div className="glass rounded-2xl p-6 text-center">
//             Freelancers
//           </div>

//           <div className="glass rounded-2xl p-6 text-center">
//             Creators
//           </div>

//         </div>

//       </section>

//       {/* FAQ */}

//       <section
//         id="faq"
//         className="py-32 px-6"
//       >

//         <h2 className="text-4xl md:text-5xl font-bold text-center">
//           Frequently Asked Questions
//         </h2>

//         <div className="max-w-4xl mx-auto mt-16 space-y-6">

//           <div className="glass rounded-2xl p-6">
//             <h3 className="font-bold">
//               Is TickFlow free?
//             </h3>

//             <p className="text-gray-400 mt-2">
//               Yes, the core functionality is free to use.
//             </p>
//           </div>

//           <div className="glass rounded-2xl p-6">
//             <h3 className="font-bold">
//               Can I manage multiple projects?
//             </h3>

//             <p className="text-gray-400 mt-2">
//               Yes, you can organize work across multiple projects.
//             </p>
//           </div>

//           <div className="glass rounded-2xl p-6">
//             <h3 className="font-bold">
//               Is the app mobile responsive?
//             </h3>

//             <p className="text-gray-400 mt-2">
//               Yes, TickFlow is designed to work across devices.
//             </p>
//           </div>

//         </div>

//       </section>

//       {/* CTA */}

//       <section className="py-32 px-6">

//         <div className="glass rounded-3xl p-12 max-w-5xl mx-auto text-center">

//           <h2 className="text-5xl font-bold">
//             Ready To Take Control Of Your Time?
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
//             Create an account and start organizing
//             your work with TickFlow.
//           </p>

//           <button
//           onClick={() => navigate("/auth")}//It allows page navigation without reloading.
//           className="bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-xl mt-10 font-semibold"
//           >
//             Get Started
//           </button>

//         </div>

//       </section>

//       <Footer />
//     </>  //which is a Fragment.
//   );
// }
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  Timer,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Dashboard",
      description:
        "See your work, activity, and progress from one clear overview.",
      icon: <LayoutDashboard size={26} />,
      card: "bg-[#DDE5F5]",
      iconBg: "bg-[#5964E8]",
      accent: "text-[#5964E8]",
    },
    {
      title: "Workspace",
      description:
        "Keep your work organized and structured in one focused place.",
      icon: <BriefcaseBusiness size={26} />,
      card: "bg-[#FAFAF8]",
      iconBg: "bg-[#E8ECF5]",
      accent: "text-[#5964E8]",
    },
    {
      title: "Activity",
      description:
        "Track what you work on and understand how your time is spent.",
      icon: <Timer size={26} />,
      card: "bg-[#DDF0EE]",
      iconBg: "bg-[#3FA7A0]",
      accent: "text-[#2F827C]",
    },
    {
      title: "Reports",
      description:
        "Review your activity and discover useful insights about progress.",
      icon: <BarChart3 size={26} />,
      card: "bg-[#FAFAF8]",
      iconBg: "bg-[#E8ECF5]",
      accent: "text-[#5964E8]",
    },
    {
      title: "Settings",
      description:
        "Manage your account and personalize your TickFlow experience.",
      icon: <Settings size={26} />,
      card: "bg-[#E8ECF5]",
      iconBg: "bg-[#243047]",
      accent: "text-[#243047]",
    },
  ];

  const faqs = [
    {
      question: "What is TickFlow?",
      answer:
        "TickFlow is a productivity workspace that helps you organize your work, track activity, and review your progress from one place.",
    },
    {
      question: "What can I do in the Workspace?",
      answer:
        "You can keep your work organized in a structured workspace and manage your workflow more clearly.",
    },
    {
      question: "Can I track my activity?",
      answer:
        "Yes. TickFlow helps you record and monitor your work activity and understand how your time is being used.",
    },
    {
      question: "Can I view reports?",
      answer:
        "Yes. Your activity can be reviewed through reports to help you understand your work and progress over time.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#EEF2F6] text-[#243047]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        {/* Soft background decorations */}

        <div className="pointer-events-none absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-[#C9D4F0] opacity-60 blur-[110px]" />

        <div className="pointer-events-none absolute -right-24 top-40 h-[320px] w-[320px] rounded-full bg-[#CDE8E5] opacity-70 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Hero text */}

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D6DCE8] bg-[#FAFAF8]/80 px-4 py-2 text-sm font-medium text-[#5964E8] shadow-sm backdrop-blur">
              <Sparkles size={15} />

              A simpler way to manage your work
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-[#243047] md:text-7xl">
              Keep your work

              <span className="block text-[#5964E8]">
                flowing forward.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#5E6B7D] md:text-xl">
              Organize your workspace, track your activity,
              and understand your progress with TickFlow.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate("/auth")}
                className="group flex items-center gap-2 rounded-xl bg-[#5964E8] px-7 py-4 font-semibold text-white shadow-lg shadow-[#5964E8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4E58D8]"
              >
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href="#features"
                className="flex items-center gap-2 rounded-xl border border-[#D6DCE8] bg-[#FAFAF8] px-7 py-4 font-medium text-[#334155] transition hover:bg-white"
              >
                Explore Features

                <ChevronDown size={18} />
              </a>
            </div>
          </div>

          {/* =================================================
              DASHBOARD PREVIEW
          ================================================== */}

          <div className="relative mx-auto mt-20 max-w-6xl">
            {/* Floating activity card */}

            <div className="absolute -left-8 top-20 z-20 hidden rounded-2xl border border-[#DDE3EC] bg-[#FAFAF8] p-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF0EE]">
                  <Timer size={20} className="text-[#2F827C]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-wide text-[#7A8798]">
                    ACTIVE SESSION
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#243047]">
                    01:42:37
                  </p>
                </div>
              </div>
            </div>

            {/* Main dashboard */}

            <div className="rounded-[30px] border border-[#D5DCE7] bg-[#DCE3EE] p-3 shadow-2xl shadow-[#243047]/10 md:p-5">
              <div className="overflow-hidden rounded-[22px] bg-[#FAFAF8]">
                {/* Browser top */}

                <div className="flex h-12 items-center gap-2 border-b border-[#E1E5EC] bg-[#F2F4F7] px-5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8A8A8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8C47C]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9DC9B6]" />

                  <div className="mx-auto hidden rounded-md bg-[#E5E9EF] px-20 py-1 text-xs text-[#7A8798] sm:block">
                    tickflow.app
                  </div>
                </div>

                <div className="flex min-h-[470px]">
                  {/* Sidebar */}

                  <aside className="hidden w-56 flex-col bg-[#243047] p-5 text-white md:flex">
                    <div className="mb-10 text-xl font-bold tracking-tight">
                      Tick<span className="text-[#AAB2FF]">Flow</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3 rounded-xl bg-[#5964E8] px-3 py-3 font-medium">
                        <LayoutDashboard size={17} />
                        Dashboard
                      </div>

                      <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#B5BFCC]">
                        <BriefcaseBusiness size={17} />
                        Workspace
                      </div>

                      <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#B5BFCC]">
                        <Timer size={17} />
                        Activity
                      </div>

                      <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#B5BFCC]">
                        <BarChart3 size={17} />
                        Reports
                      </div>

                      <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#B5BFCC]">
                        <Settings size={17} />
                        Settings
                      </div>
                    </div>
                  </aside>

                  {/* Dashboard content */}

                  <main className="flex-1 bg-[#F5F7FA] p-5 md:p-8">
                    <p className="text-sm font-medium text-[#7A8798]">
                      Productivity overview
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#243047] md:text-3xl">
                      Good afternoon
                    </h2>

                    <p className="mt-2 text-[#6B7788]">
                      Here's a quick look at your day.
                    </p>

                    {/* Stats */}

                    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                      <div className="rounded-2xl border border-[#E0E5EC] bg-[#FAFAF8] p-4 shadow-sm">
                        <p className="text-xs font-semibold text-[#7A8798]">
                          TIME TRACKED
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#243047] md:text-2xl">
                          04:32:15
                        </p>

                        <div className="mt-4 h-2 rounded-full bg-[#E7EBF1]">
                          <div className="h-full w-3/4 rounded-full bg-[#5964E8]" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#E0E5EC] bg-[#FAFAF8] p-4 shadow-sm">
                        <p className="text-xs font-semibold text-[#7A8798]">
                          ACTIVITIES
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#243047] md:text-2xl">
                          12
                        </p>

                        <p className="mt-4 text-xs font-semibold text-[#3FA7A0]">
                          +3 today
                        </p>
                      </div>

                      <div className="hidden rounded-2xl border border-[#E0E5EC] bg-[#FAFAF8] p-4 shadow-sm lg:block">
                        <p className="text-xs font-semibold text-[#7A8798]">
                          PRODUCTIVITY
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#243047]">
                          78%
                        </p>

                        <p className="mt-4 text-xs font-semibold text-[#5964E8]">
                          On track
                        </p>
                      </div>
                    </div>

                    {/* Bottom dashboard */}

                    <div className="mt-5 grid gap-4 lg:grid-cols-5">
                      <div className="rounded-2xl border border-[#E0E5EC] bg-[#FAFAF8] p-5 lg:col-span-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-[#243047]">
                            Today's Activity
                          </h3>

                          <span className="text-xs text-[#7A8798]">
                            4h 32m total
                          </span>
                        </div>

                        <div className="mt-6 flex h-28 items-end gap-3">
                          {[40, 65, 45, 85, 55, 95, 70].map(
                            (height, index) => (
                              <div
                                key={index}
                                className="flex-1 rounded-t-lg bg-[#5964E8]"
                                style={{
                                  height: `${height}%`,
                                  opacity: 0.55 + index * 0.06,
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#DDE5F5] p-5 lg:col-span-2">
                        <p className="text-sm font-medium text-[#5964E8]">
                          Current Focus
                        </p>

                        <h3 className="mt-3 font-semibold text-[#243047]">
                          Landing Page Design
                        </h3>

                        <div className="mt-5 flex items-center gap-2 text-sm text-[#2F827C]">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-[#3FA7A0]" />
                          Active now
                        </div>

                        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5964E8] py-2.5 text-sm font-semibold text-white transition hover:bg-[#4E58D8]">
                          <Play size={15} fill="currentColor" />

                          Continue Activity
                        </button>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>

            {/* Floating completed card */}

            <div className="absolute -right-5 bottom-10 z-20 hidden items-center gap-3 rounded-2xl border border-[#DDE3EC] bg-[#FAFAF8] p-4 shadow-xl lg:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDF0EE]">
                <CheckCircle2 size={21} className="text-[#2F827C]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-wide text-[#7A8798]">
                  ACTIVITY COMPLETED
                </p>

                <p className="text-sm font-bold text-[#243047]">
                  Great progress!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section id="features" className="bg-[#E8ECF5] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5964E8]">
              Built around your workflow
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#243047] md:text-6xl">
              Everything works
              <span className="block">better together.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#657185]">
              A connected workspace designed to help you
              organize, track, and understand your work.
            </p>
          </div>

          {/* Feature cards */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.card} group min-h-[270px] rounded-[28px] border border-white/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} text-white`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#243047]">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-[#657185]">
                  {feature.description}
                </p>

                <div
                  className={`mt-7 flex items-center gap-2 text-sm font-semibold ${feature.accent}`}
                >
                  Explore

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}

            {/* Small visual card */}

            <div className="hidden rounded-[28px] bg-[#243047] p-8 text-white lg:block">
              <p className="text-sm font-medium text-[#AAB2FF]">
                TICKFLOW
              </p>

              <p className="mt-8 text-3xl font-bold leading-tight">
                Less clutter.
                <br />
                More clarity.
              </p>

              <div className="mt-8 flex gap-2">
                <div className="h-2 w-12 rounded-full bg-[#5964E8]" />
                <div className="h-2 w-8 rounded-full bg-[#3FA7A0]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#243047] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9EA8FF]">
              Simple workflow
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              A clearer way to work.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#B5BFCC]">
              Keep your workflow simple from start to finish.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8">
              <span className="text-6xl font-black text-[#9EA8FF]">
                01
              </span>

              <h3 className="mt-8 text-2xl font-bold">
                Organize
              </h3>

              <p className="mt-4 leading-7 text-[#B5BFCC]">
                Bring your work together inside a clear workspace.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8">
              <span className="text-6xl font-black text-[#76C9C3]">
                02
              </span>

              <h3 className="mt-8 text-2xl font-bold">
                Track
              </h3>

              <p className="mt-4 leading-7 text-[#B5BFCC]">
                Record your activity and understand your time.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8">
              <span className="text-6xl font-black text-[#D2B6FF]">
                03
              </span>

              <h3 className="mt-8 text-2xl font-bold">
                Understand
              </h3>

              <p className="mt-4 leading-7 text-[#B5BFCC]">
                Review your reports and see your progress clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section id="faq" className="bg-[#EEF2F6] px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5964E8]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#243047] md:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-[#DCE2EB] bg-[#FAFAF8] px-6 py-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#243047]">
                  {faq.question}

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8ECF5] text-lg text-[#5964E8] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl leading-7 text-[#657185]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#E8ECF5] px-6 py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-[#5964E8] px-8 py-20 text-center shadow-xl shadow-[#5964E8]/20 md:px-16">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8D96F5] opacity-30 blur-3xl" />

          <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#3FA7A0] opacity-30 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Keep your work moving.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#E6E8FF]">
              Organize your workspace, track your activity,
              and understand your progress with TickFlow.
            </p>

            <button
              onClick={() => navigate("/auth")}
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#FAFAF8] px-8 py-4 font-semibold text-[#5964E8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
