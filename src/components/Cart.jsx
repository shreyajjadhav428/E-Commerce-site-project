function Cart({ cart, closeCart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <h2>Cart</h2>

      <button onClick={closeCart}>Close</button>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <p>{item.title}</p>
            <p>₹{item.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;