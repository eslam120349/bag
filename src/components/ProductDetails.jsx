import { PRODUCTS, WHATSAPP, PERKS } from "../data.js";

const money = (n) => `${n.toLocaleString("ar-EG")} ج.م`;

export default function ProductDetails({ product, onAddToCart, onBack, onSelectProduct }) {
  const message = `أهلاً، عايز أطلب شنطة ${product.name} بسعر ${product.price} جنيه.`;
  const orderLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-5">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
          العودة للمتجر
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div
              className="flex aspect-square items-center justify-center rounded-3xl transition-colors duration-500"
              style={{ backgroundColor: product.tint || "#f5f5f5" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[78%] object-contain animate-swap"
              />
            </div>

            {/* Thumbnail Selector */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {PRODUCTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectProduct?.(item)}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 p-2.5 transition-all ${
                    item.id === product.id
                      ? "border-ink shadow-sm"
                      : "border-line hover:border-muted"
                  }`}
                >
                  <span
                    className="flex aspect-square w-full items-center justify-center rounded-xl"
                    style={{ backgroundColor: item.tint || "#f5f5f5" }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-3/4 object-contain"
                    />
                  </span>
                  <span className="text-xs font-medium text-ink">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="inline-block text-sm font-semibold text-[#A9835C] mb-2">NØVA Collection</span>
            <h1 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              شنطة {product.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{product.tagline}</p>

            <p className="mt-6 text-3xl font-bold text-ink">{money(product.price)}</p>

            <p className="mt-6 max-w-prose leading-8 text-ink/80">{product.description}</p>

            {/* Specs */}
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {product.specs.map(([k, v]) => (
                <div key={k} className="flex justify-between py-3.5 text-sm">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onAddToCart?.(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                أضف للسلة
              </button>
              <a
                href={orderLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink px-6 py-4 text-base font-semibold text-ink transition-all hover:bg-ink hover:text-white active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.26-1.228l-.306-.182-2.87.852.852-2.87-.182-.306A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                اطلب على واتساب
              </a>
            </div>

            {/* Perks */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {PERKS.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A9835C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

