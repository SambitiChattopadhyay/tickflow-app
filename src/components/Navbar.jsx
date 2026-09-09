// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
//       <div className="glass rounded-full px-8 py-4 flex justify-between items-center">

//         {/* Logo */}

//         <h1
//           className="font-bold text-xl cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           TickFlow
//         </h1>

//         {/* Desktop Navigation */}

//         <div className="hidden md:flex gap-8 text-gray-300">

//           <a
//             href="#features"
//             className="hover:text-white transition"
//           >
//             Features
//           </a>

//           <a
//             href="#faq"
//             className="hover:text-white transition"
//           >
//             FAQ
//           </a>

//         </div>

//         {/* Buttons */}

//         <div className="flex items-center gap-3">

//           <button
//             onClick={() => navigate("/auth")}
//             className="
//               hidden
//               md:block
//               text-gray-300
//               hover:text-white
//               transition
//             "
//           >
//             Sign In
//           </button>

//           <button
//             onClick={() => navigate("/auth")}
//             className="
//               bg-violet-600
//               hover:bg-violet-500
//               px-5
//               py-2
//               rounded-xl
//               font-medium
//               transition
//             "
//           >
//             Get Started
//           </button>

//         </div>

//       </div>
//     </nav>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Navbar() {
const navigate = useNavigate();

return ( <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#D9E0EA] bg-[#F7F9FC]/90 backdrop-blur-xl"> <div className="mx-auto flex h-[72px] max-w-7xl items-center px-6">


    {/* LEFT — LOGO */}

    <div className="flex flex-1 items-center">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-left"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#243047] text-sm font-bold text-white">
          T
        </div>

        <span className="text-xl font-bold tracking-tight text-[#243047]">
          Tick<span className="text-[#5964E8]">Flow</span>
        </span>
      </button>
    </div>


    {/* CENTER — NAVIGATION */}

    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
      <a
        href="#features"
        className="text-sm font-medium text-[#657185] transition-colors hover:text-[#243047]"
      >
        Features
      </a>

      <a
        href="#faq"
        className="text-sm font-medium text-[#657185] transition-colors hover:text-[#243047]"
      >
        FAQ
      </a>
    </div>


    {/* RIGHT — ACTIONS */}

    <div className="ml-auto flex flex-1 items-center justify-end gap-5">
      <button
        onClick={() => navigate("/auth")}
        className="hidden text-sm font-medium text-[#657185] transition-colors hover:text-[#243047] md:block"
      >
        Sign In
      </button>

      <button
        onClick={() => navigate("/auth")}
        className="rounded-lg bg-[#5964E8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4E58D8] hover:shadow-md"
      >
        Get Started
      </button>
    </div>

  </div>
</nav>
);
}

