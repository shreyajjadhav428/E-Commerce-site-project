function Navbar({ search, setSearch, cartCount, openCart }) {
  return (
    <nav
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#fff",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <h2 style={{ color: "#f1641e", fontWeight: "bold", fontSize: "30px" }}>
          IncyWincy
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "50%",
            padding: "10px 15px",
            borderRadius: "25px",
            border: "1px solid #f1641e",
            outline: "none",
          }}
        />

        {/* Right Icons */}
        <div style={{ display: "flex", gap: "15px", fontSize: "30px" }}>
          <span>❤️</span>
          <span onClick={openCart} style={{ cursor: "pointer" }}>
            🛒 ({cartCount})
          </span>
          <span>👤</span>
        </div>
      </div>

      {/* Categories Row */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        <span>Gifts</span>
        <span>Birthday Hub</span>
        <span>Home Favourites</span>
        <span>Fashion Finds</span>
        <span>Vintage</span>
      </div>
    </nav>
  );
}

export default Navbar;
