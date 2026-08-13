import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  experiences,
  type Experience as ExperienceType,
} from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type ExperienceCardProps = {
  experience: ExperienceType;
  index: number;
  open: boolean;
  onToggle: () => void;
};

const companyLogos: Record<string, string> = {
  CDNTV: "/cdntv.jfif",
  MOTORMAC: "/motormac.jfif",
  "SECRETARIA MUNICIPAL DE SAÚDE": "/saude.jfif",
};

function ExperienceCard({
  experience,
  index,
  open,
  onToggle,
}: ExperienceCardProps) {
  const panelId = `experience-panel-${index}`;

  const handleToggle = () => {
    /*
     * Guarda exatamente a posição atual da página
     * antes de alterar o tamanho do card.
     */
    const currentScroll = window.scrollY;

    onToggle();

    /*
     * Impede o navegador de tentar reposicionar
     * automaticamente o botão após a mudança de altura.
     */
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScroll,
        behavior: "instant",
      });

      requestAnimationFrame(() => {
        window.scrollTo({
          top: currentScroll,
          behavior: "instant",
        });
      });
    });
  };

  return (
    <article
      className={`soft-shadow overflow-hidden rounded-[2rem] transition-colors duration-300 ${
        open
          ? "bg-[var(--ink)] text-white"
          : "bg-white text-[var(--ink)]"
      }`}
    >
      {/* CABEÇALHO */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid min-h-44 w-full grid-cols-[auto_1fr_auto] items-start gap-4 rounded-[2rem] p-6 text-left outline-none sm:items-center sm:gap-7 sm:p-8 lg:grid-cols-[auto_0.7fr_1fr_auto]"
      >
        {/* LOGO */}
        <span
          className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <img
            src={companyLogos[experience.company]}
            alt={`Logo ${experience.company}`}
            className="h-12 w-12 rounded-full object-cover"
          />
        </span>

        {/* EMPRESA E PERÍODO */}
        <span>
          <span
            className={`block text-xs font-bold uppercase tracking-[0.16em] ${
              open ? "text-white/50" : "text-[var(--muted)]"
            }`}
          >
            {experience.period}
          </span>

          <span className="mt-2 block font-display text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
            {experience.company}
          </span>
        </span>

        {/* CARGO */}
        <span
          className={`col-span-2 col-start-2 text-sm font-bold sm:text-base lg:col-span-1 lg:col-start-3 ${
            open ? "text-white/70" : "text-[var(--muted)]"
          }`}
        >
          {experience.role}
        </span>

        {/* SETA */}
        <span
          className={`col-start-3 row-start-1 grid h-11 w-11 place-items-center rounded-full transition-all duration-300 lg:col-start-4 ${
            open
              ? "rotate-180 bg-white text-[var(--ink)]"
              : "bg-[var(--accent)] text-white group-hover:scale-105"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={19} />
        </span>
      </button>

      {/* CONTEÚDO */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 pb-8 pt-8 sm:px-8 sm:pb-10 lg:px-8 lg:pt-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

                {/* DESCRIÇÃO */}
                <div className="lg:pl-[4.75rem]">
                  <p className="text-base leading-8 text-white/75">
                    {experience.description}
                  </p>

                  {/* INFORMAÇÃO ADICIONAL */}
                  <div className="mt-7 border-l-2 border-[var(--accent)] pl-5">
                    <p className="text-sm leading-7 text-white/60">
                      {experience.additional}
                    </p>
                  </div>
                </div>

                {/* CONHECIMENTOS */}
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Conhecimentos utilizados
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {experience.activities.map((activity) => (
                      <span
                        key={activity}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/70 transition-colors hover:border-[var(--accent)] hover:text-white"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function Experience() {
  /*
   * null = nenhum card aberto inicialmente.
   */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="experiencia"
      className="section-space bg-[#f7f7f5]"
    >
      <div className="section-container">

        <SectionHeading
          eyebrow="Experiência profissional"
          title="Onde construí minha experiência"
          description="Abra cada card para conhecer o contexto da atuação."
        />

        <div className="mt-12 grid gap-5 lg:mt-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
              open={openIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}