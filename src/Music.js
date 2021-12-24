import "./App.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Music() {
  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <iframe
        title="aakash song 1"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/901994314&color=%23ce5a94&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <iframe
        title="aakash song 2"
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
