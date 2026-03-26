function Hero() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Left Big Banner */}
      <div
        style={{
          backgroundColor: "#deb887",
          borderRadius: "15px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src="https://img.freepik.com/premium-photo/photographs-fashion-accessories_883586-41792.jpg"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Dive into our fresh collection 
        </h1>

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#333",
            color: "#fff",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          Shop our favourites
        </button>
      </div>

      {/* Right Small Banner */}
      <div
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="https://au-media.apjonlinecdn.com/magefan_blog/Enhancing_Your_Setup_with_HyperX_Gaming_Accessories.png"
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "20px",
            color: "#ff4500",
            fontSize:"30px"
          }}
        >
          <h3>Finds made for uninterrupted gaming</h3>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;