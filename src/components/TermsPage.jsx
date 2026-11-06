import { BRAND } from "../data.js";

export default function TermsPage() {
  const sections = [
    {
      title: "مقدمة",
      content:
        `باستخدامك لموقع ${BRAND}، أنت بتوافق على الشروط والأحكام دي. لو مش موافق على أي جزء، برجاء عدم استخدام الموقع.`,
    },
    {
      title: "الطلبات والأسعار",
      points: [
        "الأسعار المعروضة بالجنيه المصري وشاملة الضرائب.",
        "الأسعار ممكن تتغير في أي وقت بدون إشعار مسبق، لكن الطلبات المؤكدة مش بتتأثر.",
        "تأكيد الطلب بيتم بعد التواصل معاك على واتساب.",
        "ممكن نرفض أو نلغي أي طلب لأسباب تشغيلية أو لوجستية.",
      ],
    },
    {
      title: "الدفع",
      points: [
        "الدفع عند الاستلام — بتدفع لمندوب الشحن لما يوصلك الطلب.",
        "لازم يكون معاك المبلغ بالظبط أو أقرب فئة.",
        "رفض استلام الطلب بعد الشحن ممكن يؤدي لحظر الحساب من الطلبات المستقبلية.",
      ],
    },
    {
      title: "الشحن والتوصيل",
      points: [
        "بنشحن لكل محافظات مصر.",
        "مدة التوصيل تقريبية وممكن تتأثر بعوامل خارجة عن إرادتنا.",
        "العميل مسؤول عن صحة العنوان المُقدم. في حالة عنوان خاطئ، مصاريف إعادة الشحن على العميل.",
      ],
    },
    {
      title: "الاستبدال",
      points: [
        "يحق للعميل استبدال المنتج خلال ٣٠ يوم من تاريخ الاستلام.",
        "المنتج لازم يكون في حالته الأصلية بدون استخدام.",
        "المنتجات المخصصة أو اللي عليها عروض ممكن تكون مستثناة.",
      ],
    },
    {
      title: "المنتجات والصور",
      points: [
        "بنحاول الصور تكون دقيقة قدر الإمكان، لكن ممكن يكون في اختلاف بسيط في الألوان حسب إعدادات الشاشة.",
        "المقاسات المذكورة تقريبية وممكن يكون في فرق بسيط.",
      ],
    },
    {
      title: "الملكية الفكرية",
      points: [
        `كل المحتوى الموجود على الموقع (صور، نصوص، شعارات، تصميمات) ملك ${BRAND}.`,
        "مش مسموح بنسخ أو استخدام أي محتوى بدون إذن كتابي.",
      ],
    },
    {
      title: "تعديل الشروط",
      content:
        "ممكن نعدل الشروط والأحكام دي في أي وقت. التعديلات بتكون سارية من لحظة نشرها على الموقع. استمرارك في استخدام الموقع بعد التعديل بيعتبر موافقة على الشروط الجديدة.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">اتفاقية الاستخدام</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">الشروط والأحكام</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            شروط وأحكام استخدام موقع {BRAND} والشراء منه
          </p>
        </div>

        {/* Last Updated */}
        <div className="mb-10 rounded-xl bg-ink/[0.03] border border-line px-5 py-3 text-center">
          <p className="text-xs text-muted">آخر تحديث: نوفمبر ٢٠٢٦</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, i) => (
            <div key={sec.title}>
              <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8A27A]/10 text-xs font-bold text-[#A9835C]">
                  {i + 1}
                </span>
                {sec.title}
              </h2>
              {sec.content && (
                <p className="text-sm text-muted leading-7 pr-11">{sec.content}</p>
              )}
              {sec.points && (
                <ul className="space-y-2.5 pr-11">
                  {sec.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted leading-7">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#A9835C]" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {i < sections.length - 1 && <div className="mt-10 border-b border-line" />}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-line p-6 md:p-8 text-center">
          <p className="text-sm text-muted leading-7">
            لو عندك أي سؤال عن الشروط والأحكام، تواصل معانا على واتساب وهنوضحلك أي حاجة.
          </p>
        </div>
      </div>
    </section>
  );
}

