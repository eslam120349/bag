import { BRAND } from "../data.js";

export default function ReturnPolicyPage() {
  const policies = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      ),
      title: "مدة الاستبدال",
      content: "يحق للعميل طلب استبدال المنتج خلال ٣٠ يوم من تاريخ الاستلام.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "شروط الاستبدال",
      content: "يجب أن يكون المنتج في حالته الأصلية بدون استخدام أو تلف، مع الحفاظ على العبوة والتغليف الأصلي.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
          <path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: "مصاريف الشحن",
      content: "في حالة الاستبدال بسبب عيب في المنتج، مصاريف الشحن علينا. في حالة تغيير الرأي، مصاريف الشحن على العميل.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "طريقة طلب الاستبدال",
      content: "تواصل معانا على واتساب برقم الطلب وسبب الاستبدال وهنرتب معاك استلام المنتج وإرسال البديل.",
    },
  ];

  const steps = [
    { num: "١", text: "تواصل معانا على واتساب خلال ٣٠ يوم من الاستلام" },
    { num: "٢", text: "اشرحلنا سبب الاستبدال وابعتلنا صورة للمنتج" },
    { num: "٣", text: "هنرتب مع شركة الشحن استلام المنتج منك" },
    { num: "٤", text: "هنبعتلك المنتج البديل بعد استلام الأول" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">حقوقك مضمونة</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">سياسة الاستبدال</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            رضاك أولويتنا. لو المنتج مش مناسب أو فيه أي مشكلة، تقدر تستبدله بسهولة.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-14 rounded-2xl bg-[#C8A27A]/10 border border-[#C8A27A]/20 p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A9835C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-2xl font-bold text-ink">٣٠ يوم</span>
          </div>
          <p className="text-muted">مدة الاستبدال من تاريخ استلام المنتج</p>
        </div>

        {/* Policy Cards */}
        <div className="grid gap-5 sm:grid-cols-2 mb-16">
          {policies.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line p-6 md:p-8 transition-all hover:shadow-md hover:border-ink/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A27A]/10 text-[#A9835C] mb-4">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-7">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">خطوات الاستبدال</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center rounded-2xl border border-line p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white text-sm font-bold mb-4">
                  {step.num}
                </span>
                <p className="text-sm text-ink leading-7">{step.text}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-line">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="rounded-2xl bg-ink/[0.03] border border-line p-6 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted leading-7">
            <strong className="text-ink">ملاحظة:</strong> المنتجات اللي عليها عرض أو خصم ممكن تكون خاضعة لشروط استبدال مختلفة. في حالة وجود أي استفسار، تواصل معانا وهنساعدك.
          </p>
        </div>
      </div>
    </section>
  );
}

