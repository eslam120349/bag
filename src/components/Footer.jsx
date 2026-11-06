import { BRAND } from "../data.js";

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "المتجر",
      links: [
        { label: "الرئيسية", page: "home" },
        { label: "جميع المنتجات", page: "shop" },
        { label: "المجموعات", page: "home", section: "categories" },
        { label: "وصل حديثاً", page: "home", section: "featured" },
      ],
    },
    {
      title: "خدمة العملاء",
      links: [
        { label: "تواصل معنا", page: "contact" },
        { label: "سياسة الاستبدال", page: "returns" },
        { label: "الشحن والتوصيل", page: "shipping" },
        { label: "الأسئلة الشائعة", page: "faq" },
      ],
    },
    {
      title: "تابعنا",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "TikTok", href: "https://tiktok.com" },
      ],
    },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold">{BRAND}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60 max-w-xs">
              شنط مصممة بعناية لتناسب حياتك اليومية. جودة عالية، تصميم عصري، وأسعار مناسبة.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                { name: "instagram", href: "https://instagram.com" },
                { name: "facebook", href: "https://facebook.com" },
                { name: "tiktok", href: "https://tiktok.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20"
                  aria-label={social.name}
                >
                  {social.name === "instagram" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                  {social.name === "facebook" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {social.name === "tiktok" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.23V9.4a8.16 8.16 0 0 0 3.85.96V7.64a4.85 4.85 0 0 1-1.59-.72" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-white/90 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.page ? (
                      <button
                        onClick={() => {
                          onNavigate?.(link.page);
                          if (link.section) {
                            setTimeout(() => {
                              document.getElementById(link.section)?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }
                        }}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {year} {BRAND}. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => onNavigate?.("privacy")}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              سياسة الخصوصية
            </button>
            <button
              onClick={() => onNavigate?.("terms")}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              الشروط والأحكام
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
