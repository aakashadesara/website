export const Navbar = (props) => {
  return (
    <div
      style={{
        flexDirection: "row",
        marginBottom: 24,
        display: "flex",
        fontSize: 12,
        marginTop: 8,
      }}
    >
      <div
        onClick={() => (window.location = "/")}
        style={{ width: "40%", cursor: "pointer" }}
      >
        AAKASH ADESARA
      </div>
      <div
        onClick={() => window.open("/#/work")}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        WORK
      </div>
      <div
        onClick={() => window.open("/#/writing")}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        WRITING
      </div>
      <div
        onClick={() => window.open("/#/art")}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        ART
      </div>
      <div
        onClick={() => window.open("/#/books")}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        BOOKS
      </div>
    </div>
  );
};
