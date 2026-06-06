import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-6">

        <div className="glow-purple top-20 left-20"></div>
        <div className="glow-blue right-0 bottom-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="glass inline-flex px-4 py-2 rounded-full mb-8 text-sm">
              ✨ Track time effortlessly
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">

              Take Control

              <span className="block">
                Of Every Hour.
              </span>

              <span className="block text-violet-500">
                Track Smarter.
              </span>

            </h1>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-8">
              Track your work sessions, manage projects,
              analyze productivity and stay focused —
              all in one clean workspace.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-violet-600 px-6 py-4 rounded-xl font-semibold">
                Start Free
              </button>

              <button className="glass px-6 py-4 rounded-xl">
                View Demo
              </button>

            </div>

          </div>

          {/* Dashboard Preview */}

          <div className="glass rounded-3xl p-8">

            <h3 className="font-bold text-2xl mb-8">
              Today's Focus
            </h3>

            <div className="space-y-4">

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>Frontend Build</span>
                <span>2h 15m</span>
              </div>

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>DSA Practice</span>
                <span>1h 10m</span>
              </div>

              <div className="glass rounded-xl p-4 flex justify-between">
                <span>UI Design</span>
                <span>45m</span>
              </div>

            </div>

            <div className="border-t border-white/10 mt-8 pt-6">

              <p className="text-gray-400">
                Total Today
              </p>

              <h2 className="text-4xl font-bold text-violet-500 mt-2">
                5h 07m
              </h2>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="glass rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-violet-500">
              50K+
            </h2>
            <p className="text-gray-400 mt-3">
              Hours Tracked
            </p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-violet-500">
              12K+
            </h2>
            <p className="text-gray-400 mt-3">
              Tasks Completed
            </p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-violet-500">
              98%
            </h2>
            <p className="text-gray-400 mt-3">
              User Satisfaction
            </p>
          </div>

        </div>

      </section>
{/* HOW IT WORKS */}

<section className="py-32 px-6">

  <h2 className="section-title">
    How TickFlow Works
  </h2>

  <p className="section-subtitle">
    A simple workflow designed for students,
    developers and creators.
  </p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        01. Track
      </h3>

      <p className="text-gray-400">
        Start a timer and record every work session.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        02. Organize
      </h3>

      <p className="text-gray-400">
        Group your work into projects and tasks.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        03. Improve
      </h3>

      <p className="text-gray-400">
        Review reports and discover where your time goes.
      </p>
    </div>

  </div>

</section>

{/* FEATURES */}

<section
  id="features"
  className="py-32 px-6"
>

  <h2 className="section-title">
    Why Choose TickFlow?
  </h2>

  <p className="section-subtitle">
    Everything you need to stay productive.
  </p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Real-Time Tracking
      </h3>

      <p className="text-gray-400 mt-4">
        Track every minute with precision.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Project Management
      </h3>

      <p className="text-gray-400 mt-4">
        Organize projects and tasks effortlessly.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Analytics Dashboard
      </h3>

      <p className="text-gray-400 mt-4">
        Understand productivity trends instantly.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Weekly Reports
      </h3>

      <p className="text-gray-400 mt-4">
        See your progress over time.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Focus Sessions
      </h3>

      <p className="text-gray-400 mt-4">
        Stay distraction free during work.
      </p>
    </div>

    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold">
        Dark Mode
      </h3>

      <p className="text-gray-400 mt-4">
        Designed for long coding sessions.
      </p>
    </div>

  </div>

</section>

{/* TESTIMONIALS */}

<section className="py-32 px-6">

  <h2 className="section-title">
    Loved By Productive People
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

    <div className="glass rounded-3xl p-8">
      <p className="text-gray-300">
        "TickFlow helped me understand where my time actually goes."
      </p>

      <h4 className="mt-8 font-bold">
        Student Developer
      </h4>
    </div>

    <div className="glass rounded-3xl p-8">
      <p className="text-gray-300">
        "Simple, clean and exactly what I needed."
      </p>

      <h4 className="mt-8 font-bold">
        Freelance Designer
      </h4>
    </div>

    <div className="glass rounded-3xl p-8">
      <p className="text-gray-300">
        "Productivity tools usually feel bloated.
        TickFlow feels refreshing."
      </p>

      <h4 className="mt-8 font-bold">
        Engineering Student
      </h4>
    </div>

  </div>

</section>

{/* FAQ */}

<section
  id="faq"
  className="py-32 px-6"
>

  <h2 className="section-title">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto mt-16 space-y-6">

    <div className="glass rounded-2xl p-6">
      <h3 className="font-bold text-xl">
        Is TickFlow free?
      </h3>

      <p className="text-gray-400 mt-3">
        Yes. Core features are completely free.
      </p>
    </div>

    <div className="glass rounded-2xl p-6">
      <h3 className="font-bold text-xl">
        Can I track multiple projects?
      </h3>

      <p className="text-gray-400 mt-3">
        Absolutely.
      </p>
    </div>

    <div className="glass rounded-2xl p-6">
      <h3 className="font-bold text-xl">
        Is it mobile friendly?
      </h3>

      <p className="text-gray-400 mt-3">
        Yes. The application is fully responsive.
      </p>
    </div>

  </div>

</section>

{/* CTA */}

<section className="py-32 px-6">

  <div className="glass rounded-3xl p-12 max-w-5xl mx-auto text-center">

    <h2 className="text-5xl font-bold">
      Ready To Make Every Hour Count?
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Start tracking your time and building
      better productivity habits today.
    </p>

    <button className="bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-xl mt-10 font-semibold">
      Get Started Free
    </button>

  </div>

</section>

      <Footer />
    </>
  );
}