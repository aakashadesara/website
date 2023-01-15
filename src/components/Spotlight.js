import { Button, Group, Kbd } from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";
import {
  IconHome,
  IconWriting,
  IconBriefcase,
  IconMusic,
  IconBooks,
  IconArtboard,
} from "@tabler/icons";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

const rightSection = (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Kbd>⌘</Kbd>
    <span style={{ margin: "0 5px" }}>+</span>
    <Kbd>K</Kbd>
  </div>
);
export function SpotlightControl() {
  return (
    <Group position="center" style={{ width: "400px" }}>
      <TextInput
        placeholder="Search"
        rightSection={rightSection}
        rightSectionWidth={80}
        onClick={() => openSpotlight()}
        sx={{ marginRight: 8 }}
        icon={<IconSearch size={16} />}
      />
    </Group>
  );
}

export const SPOTLIGHT_ACTIONS: SpotlightAction[] = [
  {
    title: "Home",
    description: "Go to the homepage",
    onTrigger: () => (window.location = "/"),
    icon: <IconHome size={18} />,
  },
  {
    title: "Work",
    description: "Learn about my work",
    onTrigger: () => (window.location = "/work"),
    icon: <IconBriefcase size={18} />,
  },

  {
    title: "Writing",
    description: "Read some of my writing",
    onTrigger: () => (window.location = "/writing"),
    icon: <IconWriting size={18} />,
  },

  {
    title: "Music",
    description: "Listen to some of my music",
    onTrigger: () => (window.location = "/music"),
    icon: <IconMusic size={18} />,
  },

  {
    title: "Art",
    description: "Check out some of my artwork",
    onTrigger: () => (window.location = "/art"),
    icon: <IconArtboard size={18} />,
  },

  {
    title: "Books",
    description: "Read some of my books",
    onTrigger: () => (window.location = "/books"),
    icon: <IconBooks size={18} />,
  },
];
