import { PRODUCTS } from "../data.js";

const categories = [
  {
    name: "شنط توت",
    description: "واسعة ومناسبة للشغل والخروج",
    image: PRODUCTS[0]?.image,
    count: PRODUCTS.filter((p) => p.shape?.toLowerCase().includes("beige")).length || 1,
  },
  {
    name: "شنط ظهر",
    description: "للجامعة والسفر والمشاوير",
    image: PRODUCTS[1]?.image,
    count: PRODUCTS.filter((p) => p.shape?.toLowerCase().includes("jeans")).length || 1,
  },
  {
    name: "شنط يومية",
    description: "لكل يوم ولكل مناسبة",
    image: PRODUCTS[2]?.image,
    count: PRODUCTS.length,
  },
];

export default function CategorySection() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">تسوّقي حسب النوع</h2>
          <p className="mt-3 text-muted">اختاري ما يناسب ستايلك</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#C8A27A]/10">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <p className="mt-1 text-sm text-white/80">{cat.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3">
                  تسوّقي الآن
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

