export const Footer = (props) => {
  return (
    <div
      style={{
        flexDirection: "row",
        marginBottom: 36,
        display: "flex",
        fontSize: 12,
        marginTop: 24,
      }}
    >
      <div
        onClick={() => (window.location = "/")}
        style={{
          width: "100%",
          cursor: "pointer",
          fontSize: 12,
          color: "#555555",
        }}
      >
        Copyright © {new Date().getFullYear()} Aakash Adesara. All rights
        reserved.
      </div>
    </div>
  );
};
