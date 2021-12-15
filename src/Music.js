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

import Punk1 from "./assets/punks/1.png";
import Punk2 from "./assets/punks/2.png";
import Punk3 from "./assets/punks/3.png";
import Punk4 from "./assets/punks/4.png";
import Punk5 from "./assets/punks/5.png";
import Punk6 from "./assets/punks/6.png";
import Punk7 from "./assets/punks/7.png";
import Punk8 from "./assets/punks/8.png";
import Punk9 from "./assets/punks/9.png";
import Punk10 from "./assets/punks/10.png";

import Bowser from "./assets/art/bowser.jpeg";
import { Footer } from "./Footer";
import { Pill } from "./Pill";
import { HighlightPill } from "./HighlightPill";

export function Music() {
  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/901994314&color=%23ce5a94&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        style={{ marginTop: "2%" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/886059487&color=%23c42444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <Footer />
    </div>
  );
}
