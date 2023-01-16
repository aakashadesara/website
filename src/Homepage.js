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
          I'm a California-based engineer with a passion for AI, venture, and
          growth tech. I have experience in various fields, from assembling
          rockets to participating in over 90 hackathons and creating digital
          art. In my free time, I enjoy road biking and listening to house and
          lo-fi music.
        </Text>
        <br />
        <Text size="sm">
          Currently, I am a co-founder & lead engineering at{" "}
          <a href="https://www.sellscale.com">SellScale</a>, a company that
          provides AI-powered tools to enterprise growth teams. Our products
          leverage cutting-edge advancements in AI such as LLMs, generative
          models, and case-specific embeddings to give our clients a competitive
          edge.
        </Text>
        <br />
        <Text>
          Previously, I lead growth engineering at{" "}
          <a href="https://athelas.com/" target="_blank" rel="noreferrer">
            Athelas
          </a>
          , a venture backed startup pushing the boundaries of modern
          healthcare. I also founded and advise a venture firm called{" "}
          <a
            href="https://www.dailydropout.fyi"
            target="_blank"
            rel="noreferrer"
          >
            DailyDropout.FYI
          </a>{" "}
          which supports founders with hiring, marketing, and capital.
          DailyDropout.fyi also has a web3 and AI/ML arm comprising of over 80k+
          members under the umbrella.
        </Text>
        <br />
        <Text>
          I am bullish on the idea of ethical transhumanism and believe that the
          gap between humans and AI is closing every day with advancements in
          neurotech, AI, gNLP, and robotics. My experience working at
          organizations like Lyft, Nextdoor, Athelas, and UC Berkeley has
          solidified this for me.
        </Text>
        <br />
        <Text>
          In addition to my work in AI and venture, I also enjoy discussing
          topics such as space exploration, functional efficiency, and
          computer-assisted art.
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
