import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">

      {/* HERO */}
      <section className="py-28 px-4 sm:px-6 text-center border-b border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6"
        >
          Membership Plans
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light">
          Simple, Transparent Pricing
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6">
          Choose a membership that fits your goals. Upgrade or cancel anytime.
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {[
            {
              name: "Starter",
              price: "$29",
              desc: "Perfect for beginners starting their fitness journey.",
              features: [
                "Access to basic programs",
                "Community support",
                "3 workouts/week plan",
              ],
            },
            {
              name: "Elite",
              price: "$59",
              highlight: true,
              desc: "Balanced training for serious transformation.",
              features: [
                "All training programs",
                "Advanced tracking system",
                "5 workouts/week plan",
                "Priority support",
              ],
            },
            {
              name: "Athlete",
              price: "$99",
              desc: "Maximum performance and elite-level coaching access.",
              features: [
                "Everything in Elite",
                "1-on-1 coach guidance",
                "Custom training plan",
                "Performance analysis",
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border rounded-2xl p-6 bg-white/5 transition hover:bg-white/10 ${
                plan.highlight
                  ? "border-[#d4af37] scale-[1.02]"
                  : "border-white/10"
              }`}
            >

              {/* plan name */}
              <h3 className="text-xl font-light mb-2">
                {plan.name}
              </h3>

              <p className="text-white/60 text-sm mb-4">
                {plan.desc}
              </p>

              {/* price */}
              <div className="text-4xl font-light text-[#d4af37] mb-6">
                {plan.price}
                <span className="text-sm text-white/50">/mo</span>
              </div>

              {/* features */}
              <ul className="space-y-2 mb-6 text-sm text-white/70">
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center px-6 py-3 rounded-full transition ${
                  plan.highlight
                    ? "bg-[#d4af37] text-black hover:scale-105"
                    : "border border-white/20 hover:border-[#d4af37]"
                }`}
              >
                Choose Plan
              </Link>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-light mb-6">
          Not Sure Which Plan Fits You?
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Speak with a coach and get a personalized recommendation.
        </p>

        <Link
          to="/contact"
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full hover:scale-105 transition"
        >
          Talk to Us
        </Link>
      </section>

    </div>
  );
}