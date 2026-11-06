import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * NOVA intro / preloader
 * 1) الشعار يتفتح من النص (clip reveal)
 * 2) المستطيل الأسود بيكبر لحد ما يغطي الشاشة
 * 3) الستارة بتطلع لفوق وبيظهر الموقع
 *
 * الصورة بتاخد أبعادها الأصلية (من غير تمطيط) والحركة مبتبدأ غير لما الصورة تتحمل.
 *
 * الاستخدام: حطه في أول App.jsx  ->  <Preloader />
 * props:
 *   oncePerSession  (default false)  لو true بيظهر مرة واحدة بس في الجلسة
 *   onDone          callback بعد ما يخلص
 */
const LOGO_SRC =
  "https://res.cloudinary.com/dklpk2kil/image/upload/v1793991185/NOVA_NOOR1_HEROZ_koa9fh.png";
const TOTAL_MS = 3500; // مدة الانترو بعد ما الصورة تجهز

export default function Preloader({ oncePerSession = false, onDone }) {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
    if (oncePerSession && sessionStorage.getItem("nova-intro") === "1") return false;
    return true;
  });
  const [ready, setReady] = useState(false);
  const pillRef = useRef(null);
  const imgRef = useRef(null);

  // لو الصورة متخزنة في الكاش تكون خلصت قبل ما onLoad يتربط
  useEffect(() => {
    if (!show) return;
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setReady(true);
    // لو الصورة فشلت أو اتأخرت، كمّل بعد 4 ثواني عشان الموقع ميعلقش
    const fallback = setTimeout(() => setReady(true), 4000);
    return () => clearTimeout(fallback);
  }, [show]);

  // احسب أد إيه المستطيل لازم يكبر عشان يغطي الشاشة (بعد ما الصورة تاخد حجمها)
  useLayoutEffect(() => {
    if (!show || !ready || !pillRef.current) return;
    const r = pillRef.current.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const s = Math.max(window.innerWidth / r.width, window.innerHeight / r.height) * 1.15;
    pillRef.current.style.setProperty("--nova-scale", s.toFixed(2));
  }, [show, ready]);

  useEffect(() => {
    if (!show) {
      onDone?.();
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!ready) {
      return () => {
        document.body.style.overflow = prev;
      };
    }
    const t = setTimeout(() => {
      document.body.style.overflow = prev;
      if (oncePerSession) sessionStorage.setItem("nova-intro", "1");
      setShow(false);
      onDone?.();
    }, TOTAL_MS);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [show, ready]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!show) return null;

  return (
    <div className={`nova-intro${ready ? " go" : ""}`} role="status" aria-label="NOVA">
      <style>{css}</style>
      <div className="nova-pill" ref={pillRef}>
        <div className="nova-fill" />
        <img
          ref={imgRef}
          className="nova-logo"
          src={LOGO_SRC}
          alt=""
          draggable="false"
          decoding="sync"
          onLoad={() => setReady(true)}
          onError={() => setReady(true)}
        />
      </div>
    </div>
  );
}

const css = `
.nova-intro{
  position:fixed; inset:0; z-index:9999;
  display:grid; place-items:center;
  background:#FCF5E8;
  overflow:hidden;
}
.nova-intro.go{
  animation:novaCurtain .85s cubic-bezier(.77,0,.18,1) 2.6s forwards;
}

/* الحجم بييجي من الصورة نفسها: العرض بس بنحدده والطول تلقائي بنسبتها الأصلية */
.nova-pill{
  position:relative;
  width:min(78vw,560px);
}
.nova-logo{
  position:relative;
  display:block;
  width:100%;
  height:auto;          /* مفيش تمطيط */
  clip-path:inset(0 50% 0 50%);
}
/* المستطيل الأسود مخفي لحد وقت التكبير (عشان أي جزء شفاف في اللوجو ميبانش أسود) */
.nova-fill{
  position:absolute; inset:0;
  background:#050505;
  border-radius:2.6%/11%;
  opacity:0;
}

.nova-intro.go .nova-logo{
  animation:
    novaOpen 1s cubic-bezier(.7,0,.2,1) .25s forwards,
    novaLogoOut .35s ease-in 1.75s forwards;
}
.nova-intro.go .nova-fill{
  animation:novaGrow .85s cubic-bezier(.7,0,.2,1) 1.75s forwards;
}

@keyframes novaOpen{ to{ clip-path:inset(0 0 0 0); } }
@keyframes novaLogoOut{ to{ opacity:0; transform:scale(.96); } }
@keyframes novaGrow{
  from{ opacity:1; transform:scale(1); }
  to{ opacity:1; transform:scale(var(--nova-scale,8)); border-radius:0; }
}
@keyframes novaCurtain{ to{ clip-path:inset(0 0 100% 0); } }
`;