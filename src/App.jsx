import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "./services/productService";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getData();
  }, []);

  // LOGIC MOVED HERE: Always filter data BEFORE the return statement
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    setToast("Item added to cart!");

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Passing search state to Navbar as props */}
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
      />
      <Hero />
      <Categories />

      <h1 style={{ color: "#595959", textAlign: "center" }}>
        Your One Stop Destination
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* CLEAN LOOP: Just the map remains inside the JSX */}
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>

      {isCartOpen && (
        <Cart
          cart={cart}
          closeCart={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}

      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
