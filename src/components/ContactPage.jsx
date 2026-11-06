import { BRAND, WHATSAPP } from "../data.js";

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("أهلاً، عندي استفسار...")}`;

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Page Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-sm font-semibold text-[#A9835C] tracking-wide mb-2">نحب نسمع منك</span>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">تواصل معنا</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-8">
            لو عندك أي سؤال أو استفسار، فريقنا جاهز يساعدك. تقدر تتواصل معانا بأي طريقة من اللي تحت.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Contact Form */}
          <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
            <h2 className="text-xl font-bold text-ink mb-6">ابعتلنا رسالة</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const name = fd.get("name");
                const msg = fd.get("message");
                const text = `أهلاً، أنا ${name}.\n${msg}`;
                window.open(
                  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">الاسم</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="اسمك الكريم"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">رقم الموبايل</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              >
                إرسال عبر واتساب
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-5">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-line p-6 transition-all hover:border-ink/20 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.26-1.228l-.306-.182-2.87.852.852-2.87-.182-.306A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-ink group-hover:text-[#A9835C] transition-colors">واتساب</h3>
                <p className="mt-1 text-sm text-muted leading-6">أسرع طريقة للتواصل — ردنا فوري في أوقات العمل</p>
                <span className="mt-2 inline-block text-sm font-semibold text-ink">ابدأ محادثة ←</span>
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-start gap-5 rounded-2xl border border-line p-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#C8A27A]/10 text-[#A9835C]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">مواعيد العمل</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  <li className="flex justify-between gap-8"><span>السبت – الخميس</span> <span className="font-medium text-ink">١٠ ص – ١٠ م</span></li>
                  <li className="flex justify-between gap-8"><span>الجمعة</span> <span className="font-medium text-ink">٢ م – ١٠ م</span></li>
                </ul>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="flex items-start gap-5 rounded-2xl border border-line p-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">التوصيل</h3>
                <p className="mt-1 text-sm text-muted leading-6">شحن لكل محافظات مصر — الدفع عند الاستلام</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-5 rounded-2xl border border-line p-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">تابعنا على السوشيال ميديا</h3>
                <div className="mt-3 flex gap-3">
                  {["Instagram", "Facebook", "TikTok"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-muted hover:border-ink hover:text-ink transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

