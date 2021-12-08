import "./App.css";
import { Navbar } from "./Navbar";

import AthelasLogo from "./assets/athelas.jpeg";
import BTFLogo from "./assets/btf.jpeg";
import CalHacksLogo from "./assets/calhacks.jpeg";
import LyftLogo from "./assets/lyft.jpeg";
import NextdoorLogo from "./assets/nextdoor.png";
import YelpLogo from "./assets/yelp.jpeg";

import { WorkEntry } from "./WorkEntry";
import { Footer } from "./Footer";

export function Work() {
  return (
    <div
      style={{ maxWidth: 450, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <WorkEntry
        logo={AthelasLogo}
        title={"Athelas"}
        tags={["Growth Engineer", "Healthcare"]}
        description="Athelas is a fast-growing Series-B stage healthcare startup. Our mission is to bring modern healthcare services to patients with chronic illnesses to dramatically improve their health outcomes and ultimately reduce the cost of care. "
      />

      <WorkEntry
        logo={NextdoorLogo}
        title={"Nextdoor"}
        tags={["Software Engineer", "Community"]}
        description="Nextdoor is the app where you plug into the neighborhoods that matter to you. I was involved in building out several of Nextdoor's organic network effects through the Growth Virality team. ($KIND)"
      />

      <WorkEntry
        logo={CalHacksLogo}
        title={"Cal Hacks"}
        tags={["Executive Director", "Hackathon"]}
        description="Cal Hacks is the world's largest collegiate hackathon hosted annually at UC Berkeley. I was a director for 4 years and led the team for Cal Hacks 5.0 (2200+ attendees, kickstart of the Cal Hacks Fellowship startup incubator)."
      />

      <WorkEntry
        logo={BTFLogo}
        title={"CS 198: How to Build the Future"}
        tags={["Course Instructor", "UC Berkeley"]}
        description="CS 198 is Cal's entrepreneurial speaker series. We've brought in speakers like Steve Wozniak (Apple), Marshawn Lynch (Beast), Patrick Collison (Stripe) and more to dive into their entrepreneurial journeys in an intimate environment."
      />

      <WorkEntry
        logo={LyftLogo}
        title={"Lyft"}
        tags={["Machine Learning"]}
        description="I interned at Lyft on the Machine Learning division of the Adaptive Pricing team. We built models that found the optimal pricing across all nodes of Lyft's network to maximize revenue for the rideshare business."
      />

      <WorkEntry
        logo={YelpLogo}
        title={"Yelp"}
        tags={["Android Development"]}
        description="Yelp had just acquired a reservation company and I was responsible for integrating with, and natively supporting the reservation capabilities in Yelp's main Android application."
      />

      <Footer />
    </div>
  );
}
