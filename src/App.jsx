import { useState, useCallback } from "react";
import { PRODUCTS } from "./data.js";

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import CategorySection from "./components/CategorySection.jsx";
import PromoBanner from "./components/PromoBanner.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ReturnPolicyPage from "./components/ReturnPolicyPage.jsx";
import ShippingPage from "./components/ShippingPage.jsx";
import FaqPage from "./components/FaqPage.jsx";
import PrivacyPage from "./components/PrivacyPage.jsx";
import TermsPage from "./components/TermsPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Navigation
  const navigate = useCallback((newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // View product details
  const viewDetails = useCallback((product) => {
    setSelectedProduct(product);
    setPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Add to cart
  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  // Remove from cart
  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  // Update quantity
  const updateQuantity = useCallback((productId, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  }, []);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased flex flex-col justify-between">
      <div>
        <Navbar
          cartCount={totalCartItems}
          onCartClick={() => setCartOpen(true)}
          onNavigate={navigate}
          currentPage={page}
        />

        {/* Home Page */}
        {page === "home" && (
          <main>
            <HeroSection onNavigate={navigate} />
            <FeaturedProducts onAddToCart={addToCart} onViewDetails={viewDetails} />
            <CategorySection />
            <PromoBanner onNavigate={navigate} />
          </main>
        )}

        {/* Shop Page */}
        {page === "shop" && (
          <main>
            <ShopPage onAddToCart={addToCart} onViewDetails={viewDetails} />
          </main>
        )}

        {/* Product Details Page */}
        {page === "product" && selectedProduct && (
          <main>
            <ProductDetails
              product={selectedProduct}
              onAddToCart={addToCart}
              onBack={() => navigate("shop")}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          </main>
        )}

        {/* Customer Service Pages */}
        {page === "contact" && (
          <main>
            <ContactPage />
          </main>
        )}

        {page === "returns" && (
          <main>
            <ReturnPolicyPage />
          </main>
        )}

        {page === "shipping" && (
          <main>
            <ShippingPage />
          </main>
        )}

        {page === "faq" && (
          <main>
            <FaqPage />
          </main>
        )}

        {/* Legal Pages */}
        {page === "privacy" && (
          <main>
            <PrivacyPage />
          </main>
        )}

        {page === "terms" && (
          <main>
            <TermsPage />
          </main>
        )}
      </div>

      <Footer onNavigate={navigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}
