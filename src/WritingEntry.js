import { HighlightPill } from "./HighlightPill";
import { Pill } from "./Pill";

export const WritingEntry = (props) => {
  const title = props.title;
  const date = props.date;
  const tags = props.tags;
  const description = props.description;
  const link = props.link;
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
        padding: 16,
        paddingBottom: 0,
        marginBottom: 16,
      }}
    >
      <div>
        {title}
        <p>
          <Pill text={date} />{" "}
          {tags.map((tag) => {
            return (
              <span>
                <Pill text={tag} />{" "}
              </span>
            );
          })}{" "}
          <HighlightPill text="Read article" link={link} />
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
