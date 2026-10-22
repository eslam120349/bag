// رسمة بسيطة للشنطة — تُستخدم لو مفيش صورة حقيقية للمنتج.
export default function Bag({ shape, color, shade, label, className }) {
  const line = { fill: "none", stroke: shade, strokeWidth: 10, strokeLinecap: "round" };

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label={label}>
      <ellipse cx="200" cy="366" rx="120" ry="10" fill="#000" opacity="0.08" />

      {shape === "tote" && (
        <>
          <path {...line} d="M150 175 C150 85 250 85 250 175" />
          <path d="M105 170 H295 L312 338 Q313 352 299 352 H101 Q87 352 88 338 Z" fill={color} />
          <path d="M98 232 H302" stroke={shade} strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
        </>
      )}

      {shape === "crossbody" && (
        <>
          <path {...line} d="M120 192 C100 70 300 70 280 192" />
          <rect x="95" y="190" width="210" height="145" rx="24" fill={color} />
          <path d="M95 214 Q95 190 119 190 H281 Q305 190 305 214 V240 Q200 292 95 240 Z" fill={shade} />
          <circle cx="200" cy="262" r="9" fill="#fff" opacity="0.9" />
        </>
      )}

      {shape === "backpack" && (
        <>
          <path {...line} strokeWidth="14" d="M112 190 C84 230 84 300 112 335" />
          <path {...line} strokeWidth="14" d="M288 190 C316 230 316 300 288 335" />
          <path {...line} d="M178 128 C178 92 222 92 222 128" />
          <rect x="108" y="120" width="184" height="232" rx="64" fill={color} />
          <path d="M150 190 Q200 176 250 190" stroke={shade} strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="134" y="248" width="132" height="84" rx="24" fill={shade} />
          <path d="M146 248 H254" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
