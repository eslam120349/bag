import { useState } from "react";

const money = (n) => `${n.toLocaleString("ar-EG")} ج.م`;

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  const [liked, setLiked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group relative flex flex-col">
      {/* Image Container */}
      <div
        className="relative aspect-square overflow-hidden rounded-2xl transition-shadow duration-300 group-hover:shadow-xl cursor-pointer"
        style={{ backgroundColor: product.tint || "#f5f5f5" }}
        onClick={() => onViewDetails?.(product)}
      >
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all hover:scale-110 active:scale-95"
          aria-label={liked ? "إزالة من المفضلة" : "أضف للمفضلة"}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={liked ? "#e74c3c" : "none"}
            stroke={liked ? "#e74c3c" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Badge */}
        <span className="absolute top-3 right-3 z-10 rounded-lg bg-ink px-2.5 py-1 text-[11px] font-bold text-white">
          جديد
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-contain p-6 transition-all duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-ink leading-snug">
              {product.name}
            </h3>
            <p className="text-sm text-muted mt-0.5">{product.tagline}</p>
          </div>
          <p className="text-base font-bold text-ink whitespace-nowrap">
            {money(product.price)}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => onAddToCart?.(product)}
            className="flex-1 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
          >
            أضف للسلة
          </button>
          <button
            onClick={() => onViewDetails?.(product)}
            className="rounded-xl border-2 border-line px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-ink active:scale-[0.98]"
          >
            تفاصيل
          </button>
        </div>
      </div>
    </div>
  );
}

