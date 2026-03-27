function Recommendations({ products }) {
  const recommended = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recommended for you</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        {recommended.map((product) => (
          <div
            key={product.id}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              e.currentTarget.querySelector("img").style.transform =
                "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
