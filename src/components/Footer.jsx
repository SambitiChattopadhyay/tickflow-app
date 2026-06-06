export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">

        <div>
          <h3 className="font-bold text-xl">
            TickFlow
          </h3>

          <p className="text-gray-500 mt-2">
            Track smarter. Work better.
          </p>
        </div>

        <p className="text-gray-500 mt-6 md:mt-0">
          © 2026 TickFlow. All rights reserved.
        </p>

      </div>

    </footer>
  );
}