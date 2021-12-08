import "./App.css";
import { Navbar } from "./Navbar";
import AakashPortrait from "./assets/art/aakash.jpeg";
import Mandalorian from "./assets/art/mandalorian.jpeg";
import Bojack from "./assets/art/bojack.png";
import Fish from "./assets/art/fish.png";
import Japan from "./assets/art/japan.jpeg";
import Owl from "./assets/art/owl.jpeg";
import Lumber from "./assets/art/lumber.jpeg";
import Eclipse from "./assets/art/eclipse.jpeg";

import Bowser from "./assets/art/bowser.jpeg";
import { Footer } from "./Footer";
import { Pill } from "./Pill";
import { HighlightPill } from "./HighlightPill";

export function Art() {
  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <img
        src={AakashPortrait}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
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
            marginBottom: 8,
            marginRight: 8,
          }}
        >
          <p>
            <Pill
              text="Etsy Store"
              link="https://www.etsy.com/shop/AakashsArt"
            />
            <HighlightPill
              text="Visit store"
              link="https://www.etsy.com/shop/AakashsArt"
            />
          </p>
          Support my handdrawn art by visiting my Etsy store. My favorite pieces
          are Mandalorian, Blue Spirit, and Wan Shi Tong.
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
            marginBottom: 8,
          }}
        >
          <p>
            <Pill text="Opensea" link="https://opensea.io/aakashadesara" />
            <HighlightPill
              text="Sail the ocean"
              link="https://opensea.io/aakashadesara"
            />
          </p>
          My minted art under aakashadesara.eth ends up here. The main project
          right now is Pixel Punks but there's more to come!
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", marginBottom: 8 }}>
        <img
          src={Bojack}
          style={{
            width: "49%",
            borderRadius: 4,
            marginRight: 8,
          }}
          alt="artwork"
        />

        <img
          src={Fish}
          style={{
            width: "49%",
            borderRadius: 4,
          }}
          alt="artwork"
        />
      </div>
      <img
        src={Japan}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
      <img
        src={Eclipse}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
      <img
        src={Mandalorian}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
      <img
        src={Owl}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
      <img
        src={Lumber}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />
      <img
        src={Bowser}
        alt="artwork"
        style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
      />

      <Footer />
    </div>
  );
}
