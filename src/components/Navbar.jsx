import { useState, useEffect } from "react";
import { BRAND } from "../data.js";

export default function Navbar({ cartCount = 0, onCartClick, onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close mobile menu on navigation
  const navigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const links = [
    { label: "الرئيسية", page: "home" },
    { label: "وصل حديثاً", page: "home", section: "featured" },
    { label: "المتجر", page: "shop" },
    { label: "المجموعات", page: "home", section: "categories" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-line"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Brand */}
          <button
            onClick={() => navigate("home")}
            className="text-xl font-bold text-ink tracking-tight hover:opacity-80 transition-opacity"
          >
            {BRAND}
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => {
                    navigate(link.page);
                    if (link.section) {
                      setTimeout(() => {
                        document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                  className={`text-sm font-medium transition-colors hover:text-ink ${
                    currentPage === link.page && !link.section
                      ? "text-ink"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-xl text-ink hover:bg-ink/5 transition-colors"
              aria-label="بحث"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-xl text-ink hover:bg-ink/5 transition-colors"
              aria-label="السلة"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl text-ink hover:bg-ink/5 transition-colors md:hidden"
              aria-label="القائمة"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-line px-5 py-3 bg-white animate-swap">
            <div className="mx-auto max-w-7xl">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink/30"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden animate-slide-in">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="text-lg font-bold text-ink">{BRAND}</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl text-ink hover:bg-ink/5 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <ul className="px-5 py-6 space-y-1">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      navigate(link.page);
                      if (link.section) {
                        setTimeout(() => {
                          document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                    className="block w-full text-right py-3 px-3 text-base font-medium text-ink hover:bg-ink/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-[65px]" />
    </>
  );
}

