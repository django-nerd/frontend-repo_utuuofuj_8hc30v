import { motion } from 'framer-motion';
import { Globe, Server, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Dashboard',
    description: 'Analytics platform with role‑based access, charts, and real‑time data.',
    icon: Globe,
    stack: ['Laravel', 'React', 'Tailwind', 'MySQL'],
  },
  {
    title: 'Inventory Management',
    description: 'Barcode integration, stock tracking, and supplier management.',
    icon: Server,
    stack: ['CodeIgniter', 'Vue', 'PostgreSQL'],
  },
  {
    title: 'Field Service App',
    description: 'Responsive app for on‑site data collection and reporting.',
    icon: Smartphone,
    stack: ['React', 'Tailwind', 'FastAPI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm transition hover:bg-white hover:shadow"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-900/90 p-2 text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
