import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "../data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-[var(--ink)] shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="group flex items-center gap-2" aria-label="Ir para o início">
<span className="font-display text-2xl font-bold tracking-normal text-white">
  &lt;<span className="mx-0.5">/</span>&gt;
</span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/66 transition-colors hover:text-[var(--lime)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="rounded-control hidden min-h-11 items-center bg-[var(--accent)] px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 xl:flex"
        >
          Fale comigo
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] text-white xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-20 h-[calc(100svh-5rem)] bg-[var(--ink)] px-5 py-8 xl:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className="py-4 font-display text-3xl font-bold tracking-[-0.04em] text-white transition-colors hover:text-[var(--accent)]"
                >
                  <span className="mr-4 font-sans text-xs text-[var(--lime)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}