import { Button, Group, Kbd } from "@mantine/core";
import { toggleSpotlight } from "@mantine/spotlight";
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
    <Group
      position="center"
      style={{ width: "400px" }}
      onClick={() => toggleSpotlight()}
    >
      <TextInput
        placeholder="Search"
        rightSection={rightSection}
        rightSectionWidth={80}
        sx={{ marginRight: 8 }}
        icon={<IconSearch size={16} />}
      />
    </Group>
  );
}

export const SPOTLIGHT_ACTIONS: SpotlightAction[] = [
  {
    title: "Home",
    description: "Where all else begins, what am I?",
    onTrigger: () => (window.location = "/"),
    icon: <IconHome size={18} />,
  },
  {
    title: "Work",
    description: "A product of effort, what am I?",
    onTrigger: () => (window.location = "/work"),
    icon: <IconBriefcase size={18} />,
  },

  {
    title: "Writing",
    description: "Voice of silence, what am I?",
    onTrigger: () => (window.location = "/writing"),
    icon: <IconWriting size={18} />,
  },

  {
    title: "Music",
    description: "Rhythm of life, what am I?",
    onTrigger: () => (window.location = "/music"),
    icon: <IconMusic size={18} />,
  },

  {
    title: "Art",
    description: "Expression of emotions, what am I?",
    onTrigger: () => (window.location = "/art"),
    icon: <IconArtboard size={18} />,
  },

  {
    title: "Books",
    description: "Window to other worlds, what am I?",
    onTrigger: () => (window.location = "/books"),
    icon: <IconBooks size={18} />,
  },
];
