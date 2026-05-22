import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B9D, #FF8FB1, #45E3FF)" }}>
      {/* Bolhas flutuantes */}
      {[{ x: "15%", y: "20%", s: 60 }, { x: "80%", y: "15%", s: 40 }, { x: "10%", y: "70%", s: 50 }, { x: "75%", y: "75%", s: 70 }, { x: "50%", y: "10%", s: 30 }].map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{ width: b.s, height: b.s, left: b.x, top: b.y }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, type: "spring" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2">
          <span className="text-lg">🌟</span>
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white">Conteúdo Infantil</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(3.5rem,14vw,7rem)] font-black leading-[0.85] tracking-[-0.03em] text-white">
          BIBIBOP
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed sm:text-base text-white/80">
          Alegria de aprender. Conteúdo educativo e divertido para crianças de todas as idades.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#servicos" className="flex min-h-12 items-center justify-center bg-white px-8 text-xs font-bold tracking-[0.12em] uppercase text-[#FF6B9D] transition-all hover:bg-[#FFE66D] sm:min-h-0 sm:py-3.5 rounded-full">
            CONHECER
          </a>
          <a href="https://wa.me/5547XXXXXXXX" className="flex min-h-12 items-center justify-center bg-white/10 backdrop-blur-sm px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all sm:min-h-0 sm:py-3.5 rounded-full">
            FALE CONOSCO
          </a>
        </motion.div>
      </div>
    </section>
  )
}
