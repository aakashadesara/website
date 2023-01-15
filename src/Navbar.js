import { Link } from "react-router-dom";
import { ActionToggle } from "./components/colorSchemeToggle";
import { SpotlightControl } from "./components/Spotlight";
import { Tabs, Title } from "@mantine/core";
import {
  IconBriefcase,
  IconMusic,
  IconWriting,
  IconArtboard,
  IconBook,
  IconHome,
} from "@tabler/icons";

export const Navbar = (props) => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          marginTop: -8,
        }}
      >
        <Title
          order={5}
          onClick={() => (window.location = "/")}
          color={"orange"}
          style={{ width: "50%", cursor: "pointer", paddingTop: 30 }}
        >
          AAKASH ADESARA
        </Title>
        <SpotlightControl />
        <ActionToggle />
      </div>
      <Tabs
        defaultValue={window.location.pathname.replace("/", "")}
        color={"orange"}
      >
        <Tabs.List>
          <Tabs.Tab
            value="/"
            icon={<IconHome size={14} />}
            onClick={() => (window.location = "/")}
          >
            Home
          </Tabs.Tab>
          <Tabs.Tab
            value="work"
            icon={<IconBriefcase size={14} />}
            onClick={() => (window.location = "/work")}
          >
            Work
          </Tabs.Tab>
          <Tabs.Tab
            value="writing"
            icon={<IconWriting size={14} />}
            onClick={() => (window.location = "/writing")}
          >
            Writing
          </Tabs.Tab>
          <Tabs.Tab
            value="music"
            icon={<IconMusic size={14} />}
            onClick={() => (window.location = "/music")}
          >
            Music
          </Tabs.Tab>
          <Tabs.Tab
            value="art"
            icon={<IconArtboard size={14} />}
            onClick={() => (window.location = "/art")}
          >
            Art
          </Tabs.Tab>
          <Tabs.Tab
            value="books"
            icon={<IconBook size={14} />}
            onClick={() => (window.location = "/books")}
          >
            Books
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <br />
    </div>
  );
};
