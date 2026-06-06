export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full px-8 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold">
          TickFlow
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#testimonials" className="hover:text-white">
            Reviews
          </a>

          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>

        <div className="flex gap-3">
          <button className="hidden md:block">
            Login
          </button>

          <button className="bg-violet-600 hover:bg-violet-500 px-5 py-2 rounded-xl font-medium">
            Start Free
          </button>
        </div>

      </div>
    </nav>
  );
}