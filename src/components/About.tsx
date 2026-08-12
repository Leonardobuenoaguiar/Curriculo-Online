import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#f7f7f5]">
      {/* ÁREA SUPERIOR */}
      <div className="relative bg-[var(--accent)]">
        <div className="section-container relative min-h-[570px] px-6 pt-20 sm:px-8 lg:min-h-[500px] lg:px-0 lg:pt-24">

          {/* CONTEÚDO */}
          <div className="relative z-20 lg:max-w-[55%]">

            {/* TÍTULO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.9] tracking-[-0.065em] text-[var(--ink)]">
                Sobre mim
              </h2>
            </motion.div>

            {/* TEXTO PRINCIPAL */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 max-w-[520px]"
            >
              <p className="font-display text-[clamp(1.35rem,2.4vw,2.2rem)] font-normal leading-[1.2] tracking-[-0.035em] text-[var(--ink)]">
                Sou{" "}
                <strong className="font-bold text-white">
                  comunicativo, dinâmico e ágil
                </strong>
                . Encontro na tecnologia um espaço para{" "}
                <strong className="font-bold text-white">
                  resolver problemas
                </strong>
                , colaborar e continuar aprendendo.
              </p>
            </motion.div>

          </div>

          {/* FOTO - MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-[-70px] left-1/2 z-30 w-[72%] max-w-[340px] -translate-x-1/2 lg:hidden"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
              <img
                src="/leonardo.jpeg"
                alt="Leonardo Bueno de Aguiar"
                className="h-auto w-full object-cover"
              />

              {/* SOMBREAMENTO LEVE */}
              <div
                className="pointer-events-none absolute inset-0 bg-black/10"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* FOTO - DESKTOP */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute right-0 top-0 z-30 hidden w-[40%] max-w-[420px] translate-y-[50px] lg:block"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
              <img
                src="/leonardo.jpeg"
                alt="Leonardo Bueno de Aguiar"
                className="h-auto w-full object-cover"
              />

              {/* SOMBREAMENTO LEVE */}
              <div
                className="pointer-events-none absolute inset-0 bg-black/10"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ÁREA INFERIOR */}
      <div className="bg-[#f7f7f5]">
        <div className="section-container">
          <div className="min-h-[100px] pt-4 lg:min-h-[100px]" />
        </div>
      </div>
    </section>
  );
}