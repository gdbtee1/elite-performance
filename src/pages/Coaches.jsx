import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Coaches() {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24">

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 text-center border-b border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6"
        >
          Elite Coaching Team
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light">
          Train With Experts
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6">
          Our coaches are certified performance specialists with backgrounds in strength training,
          athletics, and sports science.
        </p>
      </section>

      {/* COACH GRID */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {[
            {
              name: "Alex Carter",
              role: "Strength & Conditioning Coach",
              desc: "Specializes in progressive overload systems and elite strength programming.",
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
            },
            {
              name: "Mia Rodriguez",
              role: "Athletic Performance Coach",
              desc: "Focuses on speed, agility, and explosive movement training systems.",
              img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=80",
            },
            {
              name: "Daniel Kim",
              role: "Body Transformation Specialist",
              desc: "Expert in fat loss, hypertrophy, and physique optimization programs.",
              img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition"
            >

              {/* image */}
              <div className="h-64 overflow-hidden bg-black">
                <img
                  src={coach.img}
                  alt={coach.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <p className="text-[#d4af37] text-xs tracking-widest mb-2">
                  {coach.role}
                </p>

                <h3 className="text-xl font-light mb-3">
                  {coach.name}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {coach.desc}
                </p>

                <Link
                  to="/contact"
                  className="inline-block mt-6 text-[#d4af37] border border-[#d4af37] px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition active:scale-95"
                >
                  Train With Coach
                </Link>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-light mb-6">
          Ready to Start Training?
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Get matched with the right coach based on your goals and fitness level.
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition"
        >
          Get Matched
        </Link>
      </section>

    </div>
  );
}