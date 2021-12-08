import { Pill } from "./Pill";

export const BookEntry = (props) => {
  const title = props.title;
  const author = props.author;
  const stars = props.stars;
  const description = props.description;
  const image = props.image;
  return (
    <div
      style={{
        width: "95%",
        border: "solid 1px #333",
        borderRadius: "4px",
        fontSize: 12,
        marginRight: 8,
        flexDirection: "row",
        display: "flex",
        marginBottom: 16,
      }}
    >
      {" "}
      {image && (
        <img
          src={image}
          alt="book artwork"
          style={{
            height: "120px",
            width: "80px",
            minWidth: "80px",
            objectFit: "fill",
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
          }}
        />
      )}
      <div style={{ paddingLeft: 16, paddingRight: 16 }}>
        <p>{title}</p>
        <p>
          <Pill text={stars} /> <Pill text={author} />{" "}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
