import { BRAND } from "../data.js";

export default function PrivacyPage() {
  const sections = [
    {
      title: "المعلومات اللي بنجمعها",
      items: [
        "الاسم ورقم الموبايل عشان نقدر نتواصل معاك بخصوص طلبك.",
        "العنوان بالتفصيل عشان شركة الشحن توصلّك الطلب.",
        "تفاصيل الطلب (المنتجات والكميات) عشان نجهزلك الأوردر بالظبط.",
      ],
    },
    {
      title: "إزاي بنستخدم معلوماتك",
      items: [
        "تأكيد وتجهيز طلبك وتوصيله.",
        "التواصل معاك لو في أي تحديث أو مشكلة في الطلب.",
        "تحسين خدماتنا ومنتجاتنا.",
      ],
    },
    {
      title: "مشاركة المعلومات",
      items: [
        "بنشارك عنوانك مع شركة الشحن بس عشان توصّلك الطلب.",
        "مش بنبيع أو نشارك بياناتك مع أي طرف تالت لأي سبب تاني.",
        "مش بنستخدم بياناتك في إعلانات أو تسويق بدون موافقتك.",
      ],
    },
    {
      title: "حماية المعلومات",
      items: [
        "بنحافظ على سرية بياناتك ومش بنسيبها لأي حد مش مصرح له.",
        "محادثات واتساب بينك وبينا سرية ومش بنشاركها.",
      ],
    },
    {
      title: "حقوقك",
      items: [
        "تقدر تطلب حذف بياناتك في أي وقت.",
        "تقدر تسألنا عن أي معلومات محتفظين بيها عنك.",
        "تقدر تطلب عدم التواصل معاك بأي رسائل تسويقية.",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">خصوصيتك تهمنا</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">سياسة الخصوصية</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            في {BRAND}، خصوصيتك أولوية. هنا هتلاقي كل التفاصيل عن إزاي بنتعامل مع بياناتك.
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
              <ul className="space-y-3 pr-11">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted leading-7">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9835C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {i < sections.length - 1 && <div className="mt-10 border-b border-line" />}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-line p-6 md:p-8 text-center">
          <p className="text-sm text-muted leading-7">
            لو عندك أي سؤال عن سياسة الخصوصية أو عايز تمارس أي من حقوقك، تواصل معانا على واتساب وهنساعدك.
          </p>
        </div>
      </div>
    </section>
  );
}

