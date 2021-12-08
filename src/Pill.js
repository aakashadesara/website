export const Pill = (props) => {
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
        backgroundColor: "#333333",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 4,
        marginRight: 4,
        fontSize: 8,
        color: "#AAA",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {text}
    </span>
  );
};
