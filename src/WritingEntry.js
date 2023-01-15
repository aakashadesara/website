import { Card, Title, Text, Badge, Button, Group } from "@mantine/core";

export const WritingEntry = (props) => {
  const title = props.title;
  const date = props.date;
  const tags = props.tags;
  const description = props.description;
  const link = props.link;
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="apart" mb="xs">
          <Title weight={500} order={4}>
            {title}
          </Title>
        </Group>
        <div>
          <Badge
            color="pink"
            variant="light"
            color="yellow"
            sx={{ marginRight: "8px" }}
          >
            {date}
          </Badge>
          {tags.map((tag) => (
            <Badge color="dark" variant="light" sx={{ marginRight: "8px" }}>
              {tag}
            </Badge>
          ))}
        </div>
        <br />
        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          color="orange"
          onClick={() => window.open(link, "_blank")}
        >
          Check it out!
        </Button>
      </Card>
      <br />
    </>
    // <div
    //   style={{
    //     width: "90%",
    //     border: "solid 1px #333",
    //     borderRadius: "4px",
    //     fontSize: 12,
    //     marginRight: 8,
    //     flexDirection: "row",
    //     display: "flex",
    //     padding: 16,
    //     paddingBottom: 0,
    //     marginBottom: 16,
    //   }}
    // >
    //   <div>
    //     {title}
    //     <p>
    //       <Pill text={date} />{" "}
    //       {tags.map((tag) => {
    //         return (
    //           <span>
    //             <Pill text={tag} />{" "}
    //           </span>
    //         );
    //       })}{" "}
    //       <HighlightPill text="Read article" link={link} />
    //     </p>
    //     <p>{description}</p>
    //   </div>
    // </div>
  );
};
