import { PRODUCTS } from "../data.js";
import ProductCard from "./ProductCard.jsx";

export default function ShopPage({ onAddToCart, onViewDetails }) {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">جميع المنتجات</h1>
          <p className="mt-2 text-muted">تصفّحي مجموعة شنط NØVA الكاملة</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <p className="text-sm text-muted">{PRODUCTS.length} منتجات</p>
          <div className="flex gap-2">
            <button className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white">
              الكل
            </button>
            <button className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-muted hover:border-ink hover:text-ink transition-colors">
              الأحدث
            </button>
            <button className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-muted hover:border-ink hover:text-ink transition-colors">
              الأقل سعراً
            </button>
          </div>
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

