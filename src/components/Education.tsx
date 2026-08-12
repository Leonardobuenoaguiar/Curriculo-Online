import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const educationLogos: Record<string, string> = {
  UNIRITTER: "/uniritter.jfif",
  "Instituto Calábria": "/calabria.jfif",
  "Colégio Romano Santa Marta": "/romano.png",
};

export default function Education() {
  return (
    <section id="formacao" className="section-space bg-[var(--ink)]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Formação"
          title="Aprendizado contínuo"
          description="Formação acadêmica e profissional que acompanha minha evolução."
          light
        />

        <div className="mt-14 grid gap-12 md:grid-cols-3 lg:mt-20 lg:gap-16">
          {education.map((item, index) => (
            <motion.article
              key={item.course}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="flex flex-col items-center text-center"
            >
              {/* LOGO */}
              <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[var(--accent)] bg-white">
                <img
                  src={educationLogos[item.institution]}
                  alt={`Logo ${item.institution}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* INSTITUIÇÃO */}
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                {item.institution}
              </p>

              {/* CURSO */}
              <h3 className="mt-3 max-w-sm font-display text-2xl font-bold leading-tight tracking-[-0.035em] text-white lg:text-3xl">
                {item.course}
              </h3>

              {/* PERÍODO */}
              <p className="mt-5 text-sm font-bold text-white/80">
                {item.period}
              </p>

              {/* STATUS */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/52">
                {item.status}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}