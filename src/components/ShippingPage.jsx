import { BRAND } from "../data.js";

export default function ShippingPage() {
  const governorates = [
    { region: "القاهرة والجيزة", time: "١-٢ يوم عمل", cost: "٤٥ ج.م" },
    { region: "الإسكندرية والدلتا", time: "٢-٣ أيام عمل", cost: "٥٥ ج.م" },
    { region: "الصعيد", time: "٣-٤ أيام عمل", cost: "٦٥ ج.م" },
    { region: "سيناء والبحر الأحمر", time: "٤-٥ أيام عمل", cost: "٧٥ ج.م" },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "شحن لكل المحافظات",
      desc: "بنوصّل لكل محافظات مصر من خلال شركات شحن موثوقة.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "الدفع عند الاستلام",
      desc: "مش محتاج تدفع أونلاين — ادفع لمندوب الشحن لما يوصلّك الطلب.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: "تغليف آمن",
      desc: "كل المنتجات بتتغلف بعناية عشان توصلك في أحسن حالة.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "تتبع الشحنة",
      desc: "هتقدر تتابع طلبك خطوة بخطوة من لحظة الشحن لحد ما يوصلك.",
    },
  ];

  const steps = [
    { num: "١", title: "اطلب", desc: "اختار المنتج واطلب من الموقع أو واتساب" },
    { num: "٢", title: "تأكيد", desc: "هنتواصل معاك نأكد الطلب والعنوان" },
    { num: "٣", title: "شحن", desc: "المنتج بيتحزم ويتسلم لشركة الشحن" },
    { num: "٤", title: "استلام", desc: "استلم طلبك وادفع عند الاستلام" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">توصيل سريع وآمن</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">الشحن والتوصيل</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            بنوصّل لكل محافظات مصر مع إمكانية الدفع عند الاستلام
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line p-6 text-center transition-all hover:shadow-md hover:border-ink/10">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A27A]/10 text-[#A9835C] mb-4">
                {f.icon}
              </span>
              <h3 className="text-base font-bold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-6">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Shipping Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">مصاريف وأوقات التوصيل</h2>
          <div className="rounded-2xl border border-line overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink/[0.03]">
                  <th className="text-right px-6 py-4 font-bold text-ink">المنطقة</th>
                  <th className="text-right px-6 py-4 font-bold text-ink">مدة التوصيل</th>
                  <th className="text-right px-6 py-4 font-bold text-ink">المصاريف</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {governorates.map((g) => (
                  <tr key={g.region} className="hover:bg-ink/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-ink">{g.region}</td>
                    <td className="px-6 py-4 text-muted">{g.time}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block rounded-lg bg-[#C8A27A]/10 px-3 py-1 text-xs font-bold text-[#A9835C]">
                        {g.cost}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">رحلة طلبك</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center rounded-2xl border border-line p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white font-bold mb-4">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-ink mb-1">{step.title}</h3>
                <p className="text-sm text-muted leading-6">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="rounded-2xl bg-ink/[0.03] border border-line p-6 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted leading-7">
            <strong className="text-ink">ملاحظة:</strong> أوقات التوصيل تقريبية وممكن تتأثر بالإجازات الرسمية أو ظروف استثنائية. في حالة أي تأخير هنتواصل معاك فوراً.
          </p>
        </div>
      </div>
    </section>
  );
}

