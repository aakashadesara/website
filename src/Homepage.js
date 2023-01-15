import HighlightImage from "./assets/highlight.png";
import ProfileImage from "./assets/aakash.jpeg";
import { Card, Image, Text, Badge, Button, Flex } from "@mantine/core";

import "./App.css";
import { Navbar } from "./Navbar";
import { Pill } from "./Pill";
import { Footer } from "./Footer";
import { HighlightPill } from "./HighlightPill";

export function Homepage() {
  return (
    <div
      style={{ maxWidth: 550, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={HighlightImage} height={160} alt="Norway" />
        </Card.Section>
        <br />
        <Text size="sm">
          I'm a California based engineer building in AI, venture, and
          healthcare. In the past, I've been to 90+ hackathons, assembled
          rockets, and created some digital art. I love road biking and
          house/lo-fi music.
        </Text>
        <br />
        <Text>
          Currently, I lead growth engineering at{" "}
          <a href="https://athelas.com/" target="_blank" rel="noreferrer">
            Athelas
          </a>
          , a fast-growing, venture backed startup pushing the boundaries of
          modern healthcare. Outside of work, I started and operate a venture
          firm called{" "}
          <a
            href="https://www.dailydropout.fyi"
            target="_blank"
            rel="noreferrer"
          >
            DailyDropout.FYI
          </a>{" "}
          with 50k+ community members - we support founders with hiring,
          marketing, and capital.
        </Text>
        <br />
        <Text>
          I'm bullish on the idea of ethical transhumanism - the gap between
          humans & AI is closing every day with the advent of neurotech, AI,
          gNLP, and robotics. My work at organizations like Lyft, Nextdoor,
          Athelas, & UC Berkeley has helped solidify this for me.
        </Text>
        <br />
        <Text>
          Besides that I also love chatting about space exploration, functional
          efficiency, & computer-assisted art.
        </Text>
        <br />
        <Text>
          Looking to chat? Feel free to DM me on{" "}
          <a href="https://twitter.com/aakashadesara">Twitter</a>
        </Text>
      </Card>

      <div style={{ flexDirection: "row", display: "flex", marginTop: 12 }}>
        <div>
          <img
            src={ProfileImage}
            style={{ width: 70, height: 70 }}
            alt="personal pixel punk"
          />
        </div>

        <div style={{ height: 40, marginLeft: 12, marginTop: -14 }}>
          <p>
            <Pill
              text="AAKASHADESARA.ETH"
              link="https://app.ens.domains/name/aakashadesara.eth/details"
            />

            <Pill text="📜" />
            <Pill text="🏛" />
            <Pill text="👨🏼‍🌾" />
            <Pill text="🌊" />
            <Pill text="🧬" />
            <Pill text="🦊" />
          </p>
          <p>
            <Pill
              text="0x1ce75a78ce9fc7d7f2501157a2408bd1be4910f8"
              link="https://etherscan.io/address/0x1ce75a78ce9fc7d7f2501157a2408bd1be4910f8"
            />
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
