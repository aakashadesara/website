import { Pill } from "./Pill";

export const WorkEntry = (props) => {
  const logo = props.logo;
  const title = props.title;
  const tags = props.tags;
  const description = props.description;
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
        paddingRight: 16,
        marginBottom: 16,
      }}
    >
      <img
        src={logo}
        alt="company logo"
        style={{
          width: 80,
          height: 80,
          borderRadius: 4,
          margin: 16,
          marginTop: 22,
          objectFit: "fill",
        }}
      />
      <div>
        <p>{title}</p>
        <p>
          {tags.map((tag) => {
            return (
              <span>
                <Pill text={tag} />{" "}
              </span>
            );
          })}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
