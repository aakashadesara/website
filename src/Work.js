import "./App.css";
import { Navbar } from "./Navbar";

import AthelasLogo from "./assets/athelas.jpeg";
import BTFLogo from "./assets/btf.jpeg";
import CalHacksLogo from "./assets/calhacks.jpeg";
import LyftLogo from "./assets/lyft.jpeg";
import NextdoorLogo from "./assets/nextdoor.png";
import YelpLogo from "./assets/yelp.jpeg";
import SellScaleLogo from "./assets/sellscale.png";

import { WorkEntry } from "./WorkEntry";
import { Footer } from "./Footer";

import { Group, Avatar, Text, Accordion } from "@mantine/core";

const charactersList = [
  {
    id: "SellScale",
    image: SellScaleLogo,
    label: "SellScale - Co-Founder",
    description: "AI, Sales, Product, Engineering",
    content:
      "SellScale is a fast-growing venture backed AI startup. Our mission is to bring AI powered tools to sales teams to dramatically improve their sales outcomes and ultimately enable businesses to grow more efficiently.",
  },
  {
    id: "athelas",
    image: AthelasLogo,
    label: "Athelas - Lead Growth Engineer",
    description: "Product, Growth, and Engineering",
    content:
      "Athelas is a fast-growing Series-B stage healthcare startup. Our mission is to bring modern healthcare services to patients with chronic illnesses to dramatically improve their health outcomes and ultimately reduce the cost of care.",
  },

  {
    id: "nextdoor",
    image: NextdoorLogo,
    label: "Nextdoor - Growth Engineer",
    description: "Growth Virality, Consumer Product",
    content:
      "Nextdoor is the app where you plug into the neighborhoods that matter to you. I was involved in building out several of Nextdoor's organic network effects through the Growth Virality team. ($KIND)",
  },

  {
    id: "calhacks",
    image: CalHacksLogo,
    label: "Cal Hacks - Executive Director",
    description: "Hackathon, UC Berkeley",
    content:
      "Cal Hacks is the world's largest collegiate hackathon hosted annually at UC Berkeley. I was a director for 4 years and led the team for Cal Hacks 5.0 (2200+ attendees, kickstart of the Cal Hacks Fellowship startup incubator).",
  },

  {
    id: "BTF",
    image: BTFLogo,
    label: "CS 198: Build the Future - Instructor",
    description: "Entrepreneurship, Speaker Series",
    content:
      "CS 198 is Cal's entrepreneurial speaker series. We've brought in speakers like Steve Wozniak (Apple), Marshawn Lynch (Beast), Patrick Collison (Stripe) and more to dive into their entrepreneurial journeys in an intimate environment.",
  },

  {
    id: "lyft",
    image: LyftLogo,
    label: "Lyft - ML SWE Internship",
    description: "Machine Learning, Pricing",
    content:
      "I interned at Lyft on the Machine Learning division of the Adaptive Pricing team. We built models that found the optimal pricing across all nodes of Lyft's network to maximize revenue for the rideshare business.",
  },
  {
    id: "Yelp",
    image: YelpLogo,
    label: "Yelp - Android Engineer Internship",
    description: "Android Development",
    content:
      "Yelp had just acquired a reservation company and I was responsible for integrating with, and natively supporting the reservation capabilities in Yelp's main Android application.",
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function Work() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>

      <Footer />
    </div>
  );
}
