import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">

      {/* HERO */}
      <section className="py-28 px-4 sm:px-6 text-center border-b border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6"
        >
          Training Programs
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light">
          Built for Performance
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6">
          Structured training systems designed for strength, fat loss, and elite athletic performance.
        </p>
      </section>

      {/* PROGRAM GRID */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {[
            {
              title: "Strength Foundation",
              desc: "Build raw strength using progressive overload and compound lifts.",
              tag: "Beginner - Intermediate",
            },
            {
              title: "Athletic Performance",
              desc: "Explosive speed, agility, and conditioning for peak athletic output.",
              tag: "Intermediate - Advanced",
            },
            {
              title: "Body Transformation",
              desc: "Fat loss + muscle definition using hybrid resistance training systems.",
              tag: "All Levels",
            },
            {
              title: "Elite Hypertrophy",
              desc: "Advanced muscle-building protocols used by competitive athletes.",
              tag: "Advanced",
            },
            {
              title: "Endurance Engine",
              desc: "Cardio + stamina development for peak cardiovascular performance.",
              tag: "All Levels",
            },
            {
              title: "Combat Conditioning",
              desc: "Fight-style conditioning inspired by MMA and boxing training systems.",
              tag: "Advanced",
            },
          ].map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-[#d4af37] text-xs tracking-widest mb-2">
                {program.tag}
              </p>

              <h3 className="text-xl font-light mb-3">
                {program.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {program.desc}
              </p>

              <Link
                to="/contact"
                className="inline-block mt-6 text-[#d4af37] text-sm border border-[#d4af37] px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition"
              >
                Join Program
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-light mb-6">
          Not Sure Where to Start?
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Get a personalized recommendation based on your goals and experience level.
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full hover:scale-105 transition"
        >
          Get Guidance
        </Link>
      </section>

    </div>
  );
}