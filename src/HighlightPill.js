export const HighlightPill = (props) => {
  const text = props.text;
  const link = props.link;
  return (
    <span
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      style={{
        backgroundColor: "#AAA",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 4,
        fontSize: 8,
        color: "#333333",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {text} →
    </span>
  );
};
