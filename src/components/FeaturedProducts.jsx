import { PRODUCTS } from "../data.js";
import ProductCard from "./ProductCard.jsx";

export default function FeaturedProducts({ onAddToCart, onViewDetails }) {
  return (
    <section id="featured" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-[#A9835C] tracking-wide">جديد</span>
            <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">وصل حديثاً</h2>
            <p className="mt-2 text-muted max-w-md">
              أحدث تشكيلاتنا من شنط NØVA — تصميم عصري وجودة تدوم
            </p>
          </div>
          <button
            onClick={() => onViewDetails?.(PRODUCTS[0])}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-[#A9835C] transition-colors"
          >
            عرض الكل
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

