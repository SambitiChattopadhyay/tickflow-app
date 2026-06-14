import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="glass rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          Welcome to TickFlow
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Sign in or create an account
        </p>

        <div className="space-y-5 mt-10">

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-xl
                p-4
                pl-12
                outline-none
              "
            />

          </div>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-xl
                p-4
                pl-12
                outline-none
              "
            />

          </div>

          <button
            className="
              w-full
              bg-violet-600
              hover:bg-violet-500
              py-4
              rounded-xl
              font-semibold
            "
          >
            Continue
          </button>

          <div className="flex items-center gap-3">

            <div className="h-px bg-white/10 flex-1"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="h-px bg-white/10 flex-1"></div>

          </div>

          <button
  className="
    w-full
    glass
    py-4
    rounded-xl
    font-medium
    flex
    items-center
    justify-center
    gap-3
  "
>
  <FcGoogle size={22} />
  Continue with Google
</button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-gray-400"
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}