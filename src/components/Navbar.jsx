export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full px-8 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          TickFlow
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>

        <button className="bg-violet-600 hover:bg-violet-500 px-5 py-2 rounded-xl">
          Get Started
        </button>

      </div>
    </nav>
  );
}