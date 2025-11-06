import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          About
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="prose prose-slate max-w-none"
          >
            <p className="text-slate-600">
              I am a full‑stack programmer based in Indonesia, experienced with PHP frameworks (Laravel & CodeIgniter), modern JavaScript (React & Vue), Tailwind CSS, and Python. I focus on building robust systems with clean, accessible interfaces.
            </p>
            <p className="text-slate-600">
              Currently, I work at Indonesia Asahan Aluminium (since 2021). Previously, I contributed at Budidaya Luruh (2019 – 2021). I graduated from UIN Sunan Kalijaga in 2018 majoring in Informatics, and attended MAS Darul Arafah for high school.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 text-sm text-slate-700 sm:text-base"
          >
            {[
              'PHP (Laravel, CodeIgniter)',
              'React & Vue',
              'Tailwind CSS',
              'Python',
              'REST APIs',
              'MongoDB & MySQL',
              'Docker & CI/CD',
              'Clean Architecture',
            ].map((skill) => (
              <li key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                {skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
