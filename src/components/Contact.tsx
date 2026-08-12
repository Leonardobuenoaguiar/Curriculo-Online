import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contato"
      className="section-space bg-[var(--accent)] text-white"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24"
        >
          {/* LADO ESQUERDO */}
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
              Contato
            </p>

            <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.84] tracking-[-0.075em] text-white">
              Vamos
              <span className="block text-[var(--ink)]">
                conversar?
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              Estou aberto a novas oportunidades e desafios na área de
              tecnologia.
            </p>
          </div>

          {/* LADO DIREITO */}
          <div>
            <div className="space-y-6">

              {/* EMAIL */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 text-sm font-bold text-white/80 transition-colors hover:text-white sm:text-base"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[var(--accent)]">
                  <Mail size={18} />
                </span>

                <span className="break-all">
                  {profile.email}
                </span>
              </a>

              {/* TELEFONE */}
              <a
                href="tel:+5551998661062"
                className="group flex items-center gap-4 text-sm font-bold text-white/80 transition-colors hover:text-white sm:text-base"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[var(--accent)]">
                  <Phone size={18} />
                </span>

                {profile.phone}
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Leonardobuenoaguiar"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-sm font-bold text-white/80 transition-colors hover:text-white sm:text-base"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[var(--accent)]">
                  <Code2 size={18} />
                </span>

                <span className="break-all">
                  github.com/Leonardobuenoaguiar
                </span>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* BOTÕES */}
            <div className="mt-12 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              {/* EMAIL */}
              <a
                href={`mailto:${profile.email}`}
                className="rounded-control inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--ink)] px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-[var(--accent)]"
              >
                <Mail size={17} />
                Enviar email
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/leonardo-bueno-de-aguiar-b8062a212/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-control inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 text-sm font-bold text-[var(--accent)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-white"
              >
                Acessar LinkedIn
              </a>

              {/* CURRÍCULO */}
              <a
                href="/curriculo.pdf"
                download="Curriculo-Leonardo-Bueno-de-Aguiar.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-[var(--accent)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-white"
              >
                <Download size={17} />
                Baixar currículo
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}