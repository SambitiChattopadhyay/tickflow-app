import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1
          className="font-bold text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          TickFlow
        </h1>

        {/* Desktop Navigation */}

        <div className="hidden md:flex gap-8 text-gray-300">

          <a
            href="#features"
            className="hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#faq"
            className="hover:text-white transition"
          >
            FAQ
          </a>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/auth")}
            className="
              hidden
              md:block
              text-gray-300
              hover:text-white
              transition
            "
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/auth")}
            className="
              bg-violet-600
              hover:bg-violet-500
              px-5
              py-2
              rounded-xl
              font-medium
              transition
            "
          >
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}