import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-4xl">

          <p className="text-[#d4af37] tracking-[0.4em] text-xs sm:text-sm mb-6">
            Elite Performance Training
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight">
            Build a Body That Performs
          </h1>

          <p className="text-white/60 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
            Science-driven training systems designed for strength, endurance,
            and long-term transformation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-[#d4af37] text-black px-6 py-3 rounded-full active:scale-95 hover:scale-105 transition" to="/programs">
              View Programs
            </Link>

            <Link className="border border-white/20 px-6 py-3 rounded-full active:scale-95 hover:scale-105 transition" to="/contact">
              Start Training
            </Link>
          </div>

        </div>
      </section>

      {/* STATS BAR (ADDS PROFESSIONAL FEEL) */}
      <section className="py-16 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

          {[
            { label: "Clients Transformed", value: "1,200+" },
            { label: "Certified Coaches", value: "15+" },
            { label: "Training Programs", value: "50+" },
            { label: "Years Experience", value: "10+" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-2xl md:text-3xl text-[#d4af37] font-light">
                {item.value}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-24 px-4 sm:px-6 text-center border-b border-white/10">
        <div className="max-w-5xl mx-auto">

          <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6">
            Why Elite Performance
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8">
            Training Built Like a System, Not a Guess
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Most programs fail because they lack structure. We build progressive,
            data-driven training systems that adapt to your body, goals, and performance level.
          </p>

        </div>
      </section>

      {/* PROGRAM PREVIEW */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-4">
              Programs
            </p>

            <h2 className="text-3xl sm:text-5xl font-light">
              Built for Every Level
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Strength Foundation",
                desc: "Build core strength, stability, and movement control.",
              },
              {
                title: "Athletic Performance",
                desc: "Increase speed, explosiveness, and endurance.",
              },
              {
                title: "Body Transformation",
                desc: "Fat loss and muscle growth with structured progression.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="border border-white/10 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-light mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm">{p.desc}</p>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition"
            >
              Explore All Programs
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-white/10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-6">
          Ready to Transform?
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Start your structured training journey today with elite-level coaching systems.
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}