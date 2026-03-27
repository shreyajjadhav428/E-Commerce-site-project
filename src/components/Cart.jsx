function Cart({ cart, closeCart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "600px",
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        overflowY: "auto",
        zIndex: 1000,
        borderRadius: "20px solid #595959",
      }}
    >
      <h2 style={{ color: "#f1641e", marginLeft: "20px", fontSize: "50px" }}>
        Cart
      </h2>

      <button
        onClick={closeCart}
        style={{
          backgroundColor: "#595959",
          color: "#fff",
          width: "80px",
          height: "40px",
          borderRadius: "20px",
          marginLeft: "20px",
        }}
      >
        Close
      </button>

      {cart.length === 0 ? (
        <p style={{ marginLeft: "20px", fontSize: "20px" }}>
          Your cart is empty
        </p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px", marginLeft: "20px" }}>
            <img
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
                borderRadius:"1px solid black"
              }}
              src={item.image}
            ></img>
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
              }}
            >
              ₹{item.price}
            </p>

            <button
              style={{
                backgroundColor: "#595959",
                color: "#fff",
                width: "80px",
                height: "40px",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3
        style={{
          marginLeft: "20px",
        }}
      >
        Total: ₹{total}
      </h3>
    </div>
  );
}

export default Cart;
