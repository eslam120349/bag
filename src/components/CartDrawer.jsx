import { WHATSAPP } from "../data.js";

const money = (n) => `${n.toLocaleString("ar-EG")} ج.م`;

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Build WhatsApp message
  const buildOrderMessage = () => {
    const itemsText = cartItems
      .map((item) => `• ${item.name} × ${item.quantity} = ${money(item.price * item.quantity)}`)
      .join("\n");
    const msg = `أهلاً، عايز أطلب:\n${itemsText}\n\nالإجمالي: ${money(subtotal)}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-lg font-bold text-ink">
            السلة
            {cartItems.length > 0 && (
              <span className="mr-2 text-sm font-normal text-muted">
                ({cartItems.length} منتج)
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-ink hover:bg-ink/5 transition-colors"
            aria-label="إغلاق"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex h-[calc(100%-65px)] flex-col">
          {cartItems.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e6e7ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-muted">السلة فارغة</p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-2xl border border-line p-3">
                    {/* Image */}
                    <div
                      className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: item.tint || "#f5f5f5" }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                          <p className="text-sm font-medium text-muted mt-0.5">
                            {money(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-muted hover:text-red-500 transition-colors"
                          aria-label="حذف"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-line text-ink hover:bg-ink/5 transition-colors disabled:opacity-30"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                        <span className="min-w-[20px] text-center text-sm font-semibold text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-line text-ink hover:bg-ink/5 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-line px-5 py-5 space-y-4">
                <div className="flex items-center justify-between text-base">
                  <span className="text-muted">الإجمالي</span>
                  <span className="text-xl font-bold text-ink">{money(subtotal)}</span>
                </div>
                <a
                  href={buildOrderMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.26-1.228l-.306-.182-2.87.852.852-2.87-.182-.306A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                  اطلب على واتساب
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

