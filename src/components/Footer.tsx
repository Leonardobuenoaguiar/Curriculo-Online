export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* LOGO CENTRAL */}
      <div className="flex min-h-[190px] items-center justify-center px-6 sm:min-h-[215px]">

        <a
          href="#inicio"
          aria-label="Voltar ao início"
          className="group relative"
        >
          <span
            className="
              block
              font-mono
              text-[65px]
              font-black
              leading-none
              tracking-[-0.14em]
              text-white
              transition-all
              duration-500
              sm:text-[95px]
              md:text-[125px]
              lg:text-[155px]
              group-hover:scale-105
              group-hover:text-[var(--accent)]
            "
          >
            &lt;/&gt;
          </span>
        </a>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12">

          <p className="text-xs font-medium text-white/40">
            © {new Date().getFullYear()} Leonardo Bueno de Aguiar
          </p>

          <p className="text-xs font-medium text-white/30">
            Redes • Desenvolvimento Web • Tecnologia
          </p>

        </div>
      </div>

    </footer>
  );
}