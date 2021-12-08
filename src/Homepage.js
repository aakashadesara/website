import HighlightImage from "./assets/highlight.png";
import ProfileImage from "./assets/aakash.jpeg";

import "./App.css";
import { Navbar } from "./Navbar";
import { Pill } from "./Pill";
import { Footer } from "./Footer";
import { HighlightPill } from "./HighlightPill";

export function Homepage() {
  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />
      <img
        src={HighlightImage}
        alt="aakash cover pic"
        style={{ width: "100%" }}
      />
      <p>
        I'm a California based engineer building in healthcare, venture, and
        crypto. In the past, I've been to 80+ hackathons, assembled rockets, and
        created some digital art. I love road biking and lo-fi bass-heavy
        instrumentals.
      </p>
      <p>
        Currently, I'm an engineer at{" "}
        <span style={{ marginLeft: 3 }}>
          <a href="https://athelas.com/" target="_blank">
            Athelas
          </a>
        </span>
        , a fast-growing, venture backed startup pushing the boundaries of
        modern healthcare. Outside of work, I started and operate a startup
        newsletter called
        <span style={{ marginLeft: 3 }}>
          <a href="https://www.dailydropout.fyi" target="_blank">
            DailyDropout.FYI
          </a>
        </span>{" "}
        with 40k+ community members.
      </p>
      <p>
        Looking to chat? Feel free to DM me on Twitter ({" "}
        <Pill text="@aakashadesara" link="https://twitter.com/aakashadesara" />)
      </p>

      <div style={{ flexDirection: "row", display: "flex" }}>
        <div
          style={{
            width: "50%",
            border: "solid 1px #333",
            borderRadius: "4px",
            fontSize: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 12,
            marginRight: 8,
          }}
        >
          <p>
            <Pill
              text="LATEST BLOG POST"
              link="https://athelaseng.substack.com/p/-say-hello-to-athelas-one"
            />{" "}
            <HighlightPill
              text="Read post"
              link="https://athelaseng.substack.com/p/-say-hello-to-athelas-one"
            />
          </p>
          Say Hello to Athelas One: 3-Minute FDA-Cleared Blood Diagnostics
          Powered by Cutting Edge Hardware and ML. Athelas Engineering Blog.
        </div>

        <div
          style={{
            width: "50%",
            border: "solid 1px #333",
            borderRadius: "4px",
            fontSize: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 12,
            marginRight: 8,
          }}
        >
          <p>
            <Pill
              text="FEATURED PROJECT"
              link="https://opensea.io/collection/pixel-punks-project"
            />
            <HighlightPill
              text="View punks"
              link="https://opensea.io/collection/pixel-punks-project"
            />
          </p>
          Pixel Punks - Making and minting pixelated profile pictures of friends
          and familiars. Message me on Twitter to request one. All available on
          Opensea.
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", marginTop: 12 }}>
        <div>
          <img src={ProfileImage} style={{ width: 70, height: 70 }} />
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