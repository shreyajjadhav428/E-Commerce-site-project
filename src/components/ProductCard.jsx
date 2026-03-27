function ProductCard({ title, price, image, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #595959",
        borderRadius: "12px",
        padding: "15px",
        cursor: "pointer",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
      }}
    >
      {/* 1. The Image */}
      <div style={{ overflow: "hidden", borderRadius: "10px" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </div>

      {/* 2. The Title */}
      <h3 style={{ fontSize: "16px", margin: "10px 0", color: "#333" }}>
        {title.length > 30 ? title.substring(0, 30) + "..." : title}
      </h3>

      {/* 3. The Price */}
      <p style={{ fontWeight: "bold", color: "#595959", fontSize: "18px" }}>
        ${price}
      </p>

      {/* 4. Add to Cart Button */}
      <button
        onClick={addToCart}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#f1641e",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>      
      
    </div> // The missing closing tag!
  );
}

export default ProductCard;
