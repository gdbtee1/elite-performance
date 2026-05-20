import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Coaches", path: "/coaches" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <Link className="tracking-[0.3em] text-sm font-light" to="/">
          ELITE<span className="text-[#d4af37]">PERFORMANCE</span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`transition ${
                location.pathname === l.path
                  ? "text-[#d4af37]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:block bg-[#d4af37] text-black px-5 py-2 rounded-full text-sm active:scale-95 hover:scale-105 transition"
        >
          Join Now
        </Link>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-white/10 max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div className="px-6 py-4 flex flex-col gap-3">

              {links.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base ${
                    location.pathname === l.path
                      ? "text-[#d4af37]"
                      : "text-white/70"
                  }`}
                >
                  {l.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-[#d4af37] text-black py-3 rounded-full text-center active:scale-95"
              >
                Join Now
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}