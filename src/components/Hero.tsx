import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const linkedinUrl =
  "https://www.linkedin.com/in/leonardo-bueno-de-aguiar-b8062a212/";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--ink)] text-white md:min-h-[760px]"
    >
      {/* ESPAÇO DA NAVBAR — MOBILE */}
      <div className="h-20 shrink-0 sm:hidden" />

      {/* BARRA ROTATIVA — MOBILE */}
      <div className="w-full shrink-0 overflow-hidden bg-[var(--accent)] sm:hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max whitespace-nowrap"
        >
          {/* BLOCO 1 */}
          <div className="flex h-7 items-center gap-4 px-4 text-[7px] font-semibold uppercase tracking-[0.16em] text-black/70">
            <span className="text-black">●</span>
            <span>Suporte técnico</span>

            <span className="text-black/30">•</span>
            <span>Redes</span>

            <span className="text-black/30">•</span>
            <span>Infraestrutura</span>

            <span className="text-black/30">•</span>
            <span>Desenvolvimento Web</span>

            <span className="text-black/30">•</span>
            <span>Open to work</span>

            <span className="text-black/30">•</span>
          </div>

          {/* BLOCO 2 */}
          <div className="flex h-7 items-center gap-4 px-4 text-[7px] font-semibold uppercase tracking-[0.16em] text-black/70">
            <span className="text-black">●</span>
            <span>Suporte técnico</span>

            <span className="text-black/30">•</span>
            <span>Redes</span>

            <span className="text-black/30">•</span>
            <span>Infraestrutura</span>

            <span className="text-black/30">•</span>
            <span>Desenvolvimento Web</span>

            <span className="text-black/30">•</span>
            <span>Open to work</span>

            <span className="text-black/30">•</span>
          </div>
        </motion.div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="section-container w-full flex-1">
        <div className="grid items-center gap-10 pt-6 pb-16 sm:gap-12 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* TEXTO — DESKTOP */}
          <div className="hidden sm:block">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40"
            />

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.82] tracking-[-0.075em]"
            >
              Projeto

              <span className="block text-[var(--accent)]">
                Currículo.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.65,
              }}
              className="mt-8 max-w-2xl"
            >
              <p className="font-display text-2xl font-bold text-white">
                {profile.title}
              </p>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/60">
                {profile.description}
              </p>
            </motion.div>

            {/* BOTÕES DESKTOP */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mt-7 flex flex-row gap-3"
            >
              <a
                href="#experiencia"
                className="rounded-control inline-flex min-h-12 items-center justify-center bg-[var(--lime)] px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Minha trajetória
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-control inline-flex min-h-12 items-center justify-center border border-white/15 px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/5"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* TÍTULO — MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="flex flex-col items-center justify-center sm:hidden"
          >
            <h1
              className="
                font-display
                text-[2.15rem]
                font-bold
                leading-none
                tracking-[-0.07em]
                text-center
              "
            >
              <span className="relative inline-block">
                <span className="text-white">
                  &lt;currículo
                </span>

                <span className="text-[var(--accent)]">
                  {" online"}
                </span>

                <span className="text-white">
                  &gt;
                </span>

                {/* DETALHE VISUAL */}
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
              </span>
            </h1>

            <p className="mt-5 text-center text-[10px] font-medium tracking-[0.1em] text-white/35">
              Melhor que falar é mostrar.
            </p>
          </motion.div>

          {/* JANELA DE CÓDIGO */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <div className="soft-shadow mx-auto max-w-[560px] overflow-hidden rounded-[20px] border border-white/10 bg-[#111111] sm:rounded-[24px]">

              {/* BARRA DA JANELA */}
              <div className="flex h-10 items-center border-b border-white/10 px-4 sm:h-12 sm:px-5">

                {/* BOTÕES */}
                <div className="flex items-center gap-1.5 sm:gap-2">

                  {/* FECHAR */}
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] transition-transform duration-200 hover:scale-110 sm:h-3 sm:w-3" />

                  {/* MINIMIZAR */}
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] transition-transform duration-200 hover:scale-110 sm:h-3 sm:w-3" />

                  {/* MAXIMIZAR */}
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] transition-transform duration-200 hover:scale-110 sm:h-3 sm:w-3" />

                </div>

                {/* NOME DO ARQUIVO */}
                <span className="mx-auto font-mono text-[10px] text-white/30 sm:text-xs">
                  portfolio.ts
                </span>

              </div>

              {/* CÓDIGO */}
              <div className="p-5 font-mono text-[10px] leading-6 sm:p-8 sm:text-sm sm:leading-7">

                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">leonardo</span>{" "}
                  <span className="text-white/50">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </div>

                <div className="pl-4 sm:pl-6">
                  <span className="text-white/40">nome:</span>{" "}
                  <span className="text-green-300">
                    "Leonardo Bueno de Aguiar"
                  </span>
                  <span className="text-white/30">,</span>
                </div>

                <div className="pl-4 sm:pl-6">
                  <span className="text-white/40">Curso:</span>{" "}
                  <span className="text-green-300">
                    "Ciência da computação"
                  </span>
                  <span className="text-white/30">,</span>
                </div>

                <div className="pl-4 sm:pl-6">
                  <span className="text-white/40">skills:</span>{" "}
                  <span className="text-yellow-300">[</span>
                </div>

                <div className="pl-8 text-green-300 sm:pl-12">
                  "Redes",
                </div>

                <div className="pl-8 text-green-300 sm:pl-12">
                  "Infraestrutura",
                </div>

                <div className="pl-8 text-green-300 sm:pl-12">
                  "Suporte técnico"
                </div>

                <div className="pl-8 text-green-300 sm:pl-12">
                  "Desenvolvimento Web"
                </div>

                <div className="pl-4 text-yellow-300 sm:pl-6">
                  ]
                  <span className="text-white/30">,</span>
                </div>

                <div className="pl-4 sm:pl-6">
                  <span className="text-white/40">status:</span>{" "}
                  <span className="text-green-300">
                    "open_to_work"
                  </span>
                </div>

                <div>
                  <span className="text-yellow-300">{"}"}</span>
                  <span className="text-white/30">;</span>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4 text-[9px] text-white/20 sm:mt-6 sm:pt-5 sm:text-[10px]">
                  // tecnologia + aprendizado + soluções
                </div>

              </div>

              {/* RODAPÉ */}
              <div className="flex h-7 items-center justify-between border-t border-white/10 px-4 text-[9px] text-white/25 sm:h-8 sm:px-5">
                <span>TypeScript</span>
                <span>UTF-8</span>
              </div>

            </div>
          </motion.div>

          {/* BOTÕES MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="flex flex-col items-center gap-3 sm:hidden"
          >
            <a
              href="#experiencia"
              className="rounded-control inline-flex min-h-12 w-[85%] max-w-[320px] items-center justify-center bg-[var(--lime)] px-7 text-sm font-bold text-white transition-transform active:scale-[0.98]"
            >
              Minha trajetória
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-control inline-flex min-h-12 w-[85%] max-w-[320px] items-center justify-center border border-white/15 px-7 text-sm font-bold text-white transition-transform active:scale-[0.98] hover:bg-white/5"
            >
              LinkedIn
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}