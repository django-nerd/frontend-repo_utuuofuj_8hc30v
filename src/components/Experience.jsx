import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const timeline = [
  {
    company: 'Indonesia Asahan Aluminium',
    role: 'Full‑stack Developer',
    period: '2021 — Present',
    description:
      'Building and maintaining internal systems, modernizing stacks, and enabling better workflows across teams.',
  },
  {
    company: 'Budidaya Luruh',
    role: 'Software Developer',
    period: '2019 — 2021',
    description:
      'Delivered end‑to‑end web applications, focusing on reliability, performance, and usability.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          <Briefcase className="h-7 w-7 text-slate-700" /> Experience
        </motion.h2>

        <div className="mt-10 space-y-6">
          {timeline.map((item) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                  <p className="text-slate-700">{item.company}</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{item.period}</span>
              </div>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
