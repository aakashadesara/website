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
        onClick={() => {
          window.location = "/#/work";
          window.location.reload();
        }}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        WORK
      </div>
      <div
        onClick={() => {
          window.location = "/#/writing";
          window.location.reload();
        }}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        WRITING
      </div>
      <div
        onClick={() => {
          window.location = "/#/art";
          window.location.reload();
        }}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        ART
      </div>
      <div
        onClick={() => {
          window.location = "/#/books";
          window.location.reload();
        }}
        style={{ width: "15%", textAlign: "center", cursor: "pointer" }}
      >
        BOOKS
      </div>
    </div>
  );
};
