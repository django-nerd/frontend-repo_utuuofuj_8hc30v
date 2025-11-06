import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDownRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for collaborations
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
        >
          Jumadil Abdul Rahman Sekian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
        >
          Full‑stack developer specialized in PHP (Laravel, CodeIgniter), React, Vue, Tailwind, and Python. Building reliable, modern apps with clean UX since 2019.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:jumadil@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white shadow transition hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-3 text-slate-900 transition hover:text-slate-700"
          >
            See projects <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://linkedin.com/" target="_blank" rel="noreferrer"
            className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
