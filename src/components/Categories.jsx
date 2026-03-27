function Categories() {
  const categories = [
    {
      title: "Home Decor",
      image:
        "https://www.essentialhome.eu/inspirations/wp-content/uploads/2021/11/INSPIRATIONS-Modern-Luxury-Dining-Room-Ideas.png",
    },
    {
      title: "Fashion",
      image:
        "https://www.universityoffashion.com/blog/wp-content/uploads/2019/11/Louis-Vuittons-spring-2020-show.-vogue.jpg",
    },
    {
      title: "Accessories",
      image:
        "https://m.media-amazon.com/images/I/611ZT26wdES._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Gifts",
      image:
        "https://confettigifts.in/cdn/shop/files/openwhen1.jpg?v=1757330150",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Jump into featured interests</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              cursor: "pointer",
            }}
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
              src={cat.image}
              alt={cat.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <p style={{ padding: "10px", fontWeight: "bold" }}>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
