import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Regulariza POA",
    image: "/img1.png",
    url: "https://regularizapoa.vercel.app/",
  },
  {
    title: "Seu PasteNor",
    image: "/img2.png",
    url: "https://seupastenor.vercel.app/",
  },
  {
    title: "Container Market",
    image: "/img3.png",
    url: "https://www.containermarket.com.br/",
  },
  {
    title: "FlowBook",
    image: "/img4.png",
    url: "https://flowbook-psi.vercel.app/dashboard/financeiro",
  },
];

export default function Skills() {
  return (
    <section
      id="projetos"
      className="section-space bg-[#f7f7f5]"
    >
      <div className="section-container">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Projetos
          </p>

          <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-[var(--ink)]">
            Projetos que desenvolvi
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Alguns projetos desenvolvidos durante minha trajetória em
            desenvolvimento web.
          </p>
        </motion.div>

        {/* PROJETOS */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:mt-16">

          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group block min-w-0"
            >

              {/* JANELA DO NAVEGADOR */}
              <div className="min-w-0 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 sm:rounded-[2rem] group-hover:-translate-y-2">

                {/* BARRA ESTILO VS CODE */}
                <div className="flex h-11 min-w-0 items-center gap-2 border-b border-[#3a3a3a] bg-[#2d2d2d] px-3 sm:h-12 sm:gap-3 sm:px-4">

                  {/* BOLINHAS */}
                  <div className="flex shrink-0 gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
                  </div>

                  {/* ENDEREÇO */}
                  <div className="ml-1 flex h-6 min-w-0 flex-1 items-center overflow-hidden rounded-md bg-[#3a3a3a] px-2.5 sm:ml-2 sm:h-7 sm:px-3">
                    <span className="block truncate text-[10px] text-[#b8b8b8] sm:text-xs">
                      {project.url.replace("https://", "")}
                    </span>
                  </div>

                  <ExternalLink
                    size={14}
                    className="shrink-0 text-[#a0a0a0] transition-colors group-hover:text-white sm:h-[15px] sm:w-[15px]"
                  />
                </div>

                {/* IMAGEM COMPLETA */}
                <div className="relative overflow-hidden bg-gray-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="block h-auto w-full object-contain"
                  />

                  {/* HOVER */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/10">

                    <span className="hidden rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--ink)] opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 sm:inline-flex">
                      Visitar projeto
                    </span>

                  </div>
                </div>

                {/* RODAPÉ */}
                <div className="flex items-center justify-between gap-4 p-4 sm:p-6">

                  <h3 className="min-w-0 truncate font-display text-xl font-bold tracking-[-0.035em] text-[var(--ink)] sm:text-2xl">
                    {project.title}
                  </h3>

                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white transition-transform duration-300 group-hover:rotate-[-45deg] sm:h-10 sm:w-10">
                    <ExternalLink size={16} className="sm:h-[17px] sm:w-[17px]" />
                  </span>

                </div>

              </div>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}