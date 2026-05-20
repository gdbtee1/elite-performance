import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent — we’ll get back to you soon.");
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen">

      {/* HERO */}
      <section className="py-28 px-4 sm:px-6 text-center border-b border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#d4af37] tracking-[0.35em] uppercase text-xs mb-6"
        >
          Start Your Journey
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light">
          Contact Elite Coaching
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-6">
          Tell us your goals. We’ll build a system to help you achieve them.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-light mb-2 text-[#d4af37]">
                Elite Performance Gym
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We work with athletes, beginners, and professionals to build
                strength, endurance, and long-term performance systems.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/60">
              <p>📍 Training Centers Worldwide</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ support@eliteperformance.com</p>
              <p>⏰ 24/7 Online Coaching Access</p>
            </div>

            <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
              <p className="text-[#d4af37] text-sm mb-2">
                “Your transformation starts with a decision.”
              </p>
              <p className="text-white/50 text-sm">
                Every elite athlete once started with a message like this.
              </p>
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-white/10 p-6 rounded-2xl bg-white/5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-[#d4af37]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-[#d4af37]"
              required
            />

            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-[#d4af37]"
              required
            >
              <option value="">Select Your Goal</option>
              <option value="strength">Strength Building</option>
              <option value="fatloss">Fat Loss</option>
              <option value="athletic">Athletic Performance</option>
              <option value="muscle">Muscle Growth</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your goals..."
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-[#d4af37]"
            />

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black py-3 rounded-full hover:scale-105 transition"
            >
              Submit Application
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}