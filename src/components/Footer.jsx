import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-sm text-slate-600">
            © {year} Jumadil Abdul Rahman Sekian. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
