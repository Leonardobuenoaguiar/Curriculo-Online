import { motion } from "framer-motion";
import {
  Code2,
  Network,
  Server,
  Wrench,
} from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Resolver problemas",
    description:
      "Gosto de entender a causa de um problema, investigar possibilidades e encontrar soluções práticas.",
  },
  {
    icon: Network,
    title: "Entender como tudo se conecta",
    description:
      "Minha experiência com redes e infraestrutura me trouxe uma visão ampla de ambientes e sistemas.",
  },
  {
    icon: Server,
    title: "Manter tudo funcionando",
    description:
      "Monitoramento, suporte e atenção aos detalhes fazem parte da forma como encaro a tecnologia.",
  },
  {
    icon: Code2,
    title: "Construir soluções",
    description:
      "Estou ampliando minha atuação para desenvolvimento web, automação e criação de novas soluções.",
  },
];

export default function Timeline() {
  return (
    <section
      id="trajetória"
      className="section-space bg-[var(--ink)] text-white"
    >
      <div className="section-container">

        {/* CABEÇALHO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
            O que me move
          </p>

          <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.065em]">
            Gosto de tecnologia
            <span className="block text-[var(--accent)]">
              porque gosto de resolver problemas.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Mais do que aprender ferramentas, busco entender os problemas,
            encontrar caminhos e transformar conhecimento em soluções que
            realmente funcionem.
          </p>
        </motion.div>

        {/* PILARES */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:bg-white/[0.055] sm:p-7"
              >

                {/* ÍCONE */}
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon size={19} />
                </span>

                {/* NÚMERO */}
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  0{index + 1}
                </p>

                {/* TÍTULO */}
                <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                  {pillar.title}
                </h3>

                {/* TEXTO */}
                <p className="mt-4 text-sm leading-6 text-white/50">
                  {pillar.description}
                </p>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}