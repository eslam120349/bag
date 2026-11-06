import { PERKS } from "../data.js";

export default function PromoBanner({ onNavigate }) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 text-center">
        {/* Perks Row */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {PERKS.map((perk, i) => (
            <div key={perk} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                {i === 0 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                )}
              </span>
              <span className="text-sm font-medium text-white">{perk}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          جودة تستحقها — بسعر يناسبك
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
          كل شنط NØVA مصنوعة من خامات عالية الجودة مع اهتمام بأدق التفاصيل
        </p>
        <button
          onClick={() => onNavigate?.("shop")}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-ink active:scale-[0.98]"
        >
          اطلب الآن
        </button>
      </div>
    </section>
  );
}

