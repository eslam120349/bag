import { PRODUCTS } from "../data.js";

export default function HeroSection({ onNavigate }) {
  const heroProduct = PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-[#C8A27A]/10 via-white to-[#C8A27A]/5">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:py-24 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-block mb-4 text-sm font-semibold text-[#A9835C] tracking-wide">
            مجموعة NØVA الجديدة
          </span>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            أناقة
            <br />
            <span className="text-[#A9835C]">تحملينها</span>
            <br />
            كل يوم
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            اكتشفي مجموعة شنط NØVA المصممة بعناية لتناسب حياتك اليومية. جودة عالية وتصميم عصري.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("shop")}
              className="inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            >
              تسوّقي الآن
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => {
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-ink px-8 py-4 text-base font-semibold text-ink transition-all hover:bg-ink hover:text-white active:scale-[0.98]"
            >
              اكتشفي المزيد
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <span className="text-2xl font-bold text-ink">+500</span>
              <p className="text-sm text-muted mt-1">عميلة سعيدة</p>
            </div>
            <div className="border-r border-line pr-10">
              <span className="text-2xl font-bold text-ink">٣</span>
              <p className="text-sm text-muted mt-1">تصميمات فريدة</p>
            </div>
            <div className="border-r border-line pr-10">
              <span className="text-2xl font-bold text-ink">١٤</span>
              <p className="text-sm text-muted mt-1">يوم استبدال</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Background circle */}
            <div className="absolute inset-0 m-auto aspect-square w-[85%] rounded-full bg-[#C8A27A]/10" />
            <div className="absolute inset-0 m-auto aspect-square w-[70%] rounded-full bg-[#C8A27A]/8" />
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="relative z-10 w-full object-contain drop-shadow-2xl animate-hero-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

