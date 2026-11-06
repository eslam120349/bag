import { useState } from "react";
import { BRAND, WHATSAPP } from "../data.js";

const faqs = [
  {
    category: "الطلب والدفع",
    items: [
      {
        q: "إزاي أقدر أطلب؟",
        a: "تقدر تطلب من خلال الموقع مباشرة عن طريق إضافة المنتج للسلة والطلب عبر واتساب. أو تقدر تبعتلنا على واتساب مباشرة باسم المنتج اللي عايزه.",
      },
      {
        q: "إيه طرق الدفع المتاحة؟",
        a: "حالياً بنوفر الدفع عند الاستلام (كاش لمندوب الشحن). ده بيضمنلك إنك تشوف المنتج الأول وبعدين تدفع.",
      },
      {
        q: "أقدر أطلب أكتر من منتج في نفس الطلب؟",
        a: "طبعاً! أضف كل المنتجات اللي عايزها للسلة وهتقدر تطلبهم كلهم مع بعض في طلب واحد.",
      },
    ],
  },
  {
    category: "الشحن والتوصيل",
    items: [
      {
        q: "بتوصّلوا لكل محافظات مصر؟",
        a: "أيوه، بنشحن لكل محافظات مصر من خلال شركات شحن موثوقة.",
      },
      {
        q: "الشحن بياخد وقت أد إيه؟",
        a: "القاهرة والجيزة: ١-٢ يوم عمل. باقي المحافظات: ٢-٥ أيام عمل حسب المنطقة.",
      },
      {
        q: "أقدر أتتبع الشحنة بتاعتي؟",
        a: "أيوه، بعد ما الطلب يتشحن هنبعتلك رقم تتبع الشحنة على واتساب تقدر تتابع بيه طلبك.",
      },
    ],
  },
  {
    category: "الاستبدال والاسترجاع",
    items: [
      {
        q: "أقدر أستبدل المنتج؟",
        a: "أيوه، تقدر تستبدل المنتج خلال ٣٠ يوم من تاريخ الاستلام بشرط يكون في حالته الأصلية بدون استخدام.",
      },
      {
        q: "مين بيدفع مصاريف شحن الاستبدال؟",
        a: "لو الاستبدال بسبب عيب في المنتج، المصاريف علينا. لو تغيير رأي، المصاريف على العميل.",
      },
      {
        q: "أقدر أسترجع المنتج وآخد فلوسي؟",
        a: "حالياً بنوفر استبدال المنتج بمنتج تاني. لو في حالة استثنائية تواصل معانا وهنساعدك.",
      },
    ],
  },
  {
    category: "المنتجات",
    items: [
      {
        q: "الشنط مصنوعة من إيه؟",
        a: "شنطنا مصنوعة من خامات عالية الجودة زي الجلد الصناعي والقماش المقاوم للماء. تفاصيل كل منتج موجودة في صفحة المنتج.",
      },
      {
        q: "الألوان في الصور هي نفس الألوان الحقيقية؟",
        a: "بنحاول الصور تكون أقرب ما يكون للون الحقيقي، لكن ممكن يكون في اختلاف بسيط حسب إعدادات الشاشة.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => {
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("أهلاً، عندي سؤال...")}`;

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">محتاج مساعدة؟</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">الأسئلة الشائعة</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            لقينا الأسئلة اللي بتتسأل كتير وجاوبنا عليها. لو سؤالك مش هنا، كلّمنا!
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <span className="h-1 w-5 rounded-full bg-[#A9835C] inline-block" />
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border transition-all ${
                        isOpen ? "border-ink/15 shadow-sm" : "border-line"
                      }`}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-right"
                      >
                        <span className="text-sm font-semibold text-ink leading-7">{item.q}</span>
                        <span className={`flex-shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 animate-swap">
                          <p className="text-sm text-muted leading-7">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-ink p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">لسه عندك سؤال؟</h2>
          <p className="text-white/60 mb-6 text-sm leading-7">
            فريقنا جاهز يساعدك. كلّمنا على واتساب وهنرد عليك في أسرع وقت.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-ink active:scale-[0.98]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.26-1.228l-.306-.182-2.87.852.852-2.87-.182-.306A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
            </svg>
            تواصل معانا
          </a>
        </div>
      </div>
    </section>
  );
}

