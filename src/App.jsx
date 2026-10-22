import { useState } from "react";
import Bag from "./Bag.jsx";
import { BRAND, WHATSAPP, PERKS, PRODUCTS } from "./data.js";

const money = (n) => `${n.toLocaleString("ar-EG")} ج.م`;

function Visual({ product, className }) {
  if (product.image) {
    return <img src={product.image} alt={`شنطة ${product.name}`} className={`${className} object-contain`} />;
  }
  return (
    <Bag
      shape={product.shape}
      color={product.color}
      shade={product.shade}
      label={`شنطة ${product.name}`}
      className={className}
    />
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const p = PRODUCTS[index];

  const message = `أهلاً، عايز أطلب شنطة ${p.name} بسعر ${p.price} جنيه.`;
  const orderLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 lg:grid-cols-2 lg:gap-14">
        {/* المعرض */}
        <section aria-label="صور المنتج">
          <div
            className="flex aspect-square items-center justify-center rounded-3xl transition-colors duration-500"
            style={{ backgroundColor: p.tint }}
          >
            <Visual key={p.id} product={p} className="animate-swap w-[78%]" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3" role="group" aria-label="اختار الموديل">
            {PRODUCTS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${i === index ? "border-ink" : "border-line hover:border-muted"
                  }`}
              >
                <span
                  className="flex aspect-square w-full items-center justify-center rounded-xl"
                  style={{ backgroundColor: item.tint }}
                >
                  <Visual product={item} className="w-3/4" />
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* التفاصيل */}
        <section className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">شنطة {p.name}</h1>
          <p className="mt-2 text-lg text-muted">{p.tagline}</p>

          <p className="mt-6 text-3xl font-semibold">{money(p.price)}</p>

          <p className="mt-6 max-w-prose leading-8 text-ink/80">{p.description}</p>

          <dl className="mt-6 divide-y divide-line border-y border-line">
            {p.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between py-3 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            اطلب شنطة {p.name} على واتساب
          </a>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            {PERKS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {BRAND}
      </footer>
    </div>
  );
}
