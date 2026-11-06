// ✏️ عدّل من هنا: اسم البراند، رقم الواتساب، والمنتجات.
export const BRAND = "اسم البراند";
export const WHATSAPP = "201000000000"; // رقمك بصيغة دولية بدون + (مصر: 20 ثم الرقم بدون صفر)

// معلومات تحت زرار الطلب
export const PERKS = ["شحن لكل المحافظات", "الدفع عند الاستلام", "استبدال خلال ١٤ يوم"];

// shape: tote | crossbody | backpack
// image: ضع مسار صورة حقيقية (مثلاً "/bags/tote.jpg" من فولدر public) وهتظهر بدل الرسمة
export const PRODUCTS = [
  {
    id: "NØVA beige 0.1",
    shape: "NØVA beige 0.1",
    name: "NØVA beige 0.1",
    tagline: "واسعة ولطيفة للشغل والخروج",
    price: 350,
    color: "#C8A27A",
    shade: "#A9835C",
    tint: "#ffffffff",
    description: "شنطة كبيرة بتشيل اللابتوب والحاجات اليومية، وإيدين مريحة على الكتف.",
    specs: [["الخامة", "جلد صناعي"], ["المقاس", "٣٨ × ٣٢ × ١٢ سم"], ["اللون", "جملي"]],
    image: "https://res.cloudinary.com/dklpk2kil/image/upload/v1793963770/WhatsApp_Image_2026-11-06_at_1.07.58_PM_gpk2bw.webp",
  },
  {
    id: "NØVA 0.2/2",
    shape: "NØVA 0.2/2",
    name: "NØVA 0.2/2",
    tagline: "خفيفة وعملية لليوم كله",
    price: 690,
    color: "#3F5B4C",
    shade: "#2C4236",
    tint: "#ffffffff",
    description: "شنطة صغيرة بسير طويل قابل للتعديل، فيها مكان للموبايل والمحفظة والمفاتيح.",
    specs: [["الخامة", "جلد صناعي"], ["المقاس", "٢٤ × ١٨ × ٨ سم"], ["اللون", "أخضر زيتي"]],
    image: "https://res.cloudinary.com/dklpk2kil/image/upload/v1793963540/WhatsApp_Image_2026-11-06_at_1.07.57_PM_w9jkpf.webp",
  },
  {
    id: "NØVA 0.2",
    shape: "NØVA 0.2",
    name: "NØVA 0.2",
    tagline: "للجامعة والسفر والمشاوير الطويلة",
    price: 990,
    color: "#2B2E34",
    shade: "#1B1D21",
    tint: "#ffffffff",
    description: "شنطة ضهر بجيب أمامي وسوست مبطّنة، وحمالات مريحة للاستخدام اليومي.",
    specs: [["الخامة", "قماش مقاوم للماء"], ["المقاس", "٤٠ × ٢٨ × ١٤ سم"], ["اللون", "فحمي"]],
    image: "https://res.cloudinary.com/dklpk2kil/image/upload/v1793964185/WhatsApp_Image_2026-11-06_at_1.07.58_PM_1_y3lxub.webp",
  },
];
