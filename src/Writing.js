import "./App.css";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

import { WritingEntry } from "./WritingEntry";

export function Writing() {
  return (
    <div
      style={{ maxWidth: 550, margin: "0% auto", padding: 16, fontSize: 14 }}
    >
      <Navbar />

      <WritingEntry
        title={"Build Internal Tools Fast and at Scale"}
        date={"December 31, 2021"}
        tags={["Athelas", "Healthcare", "Interal Tools"]}
        description="Using Retool to catalyze developer and operational velocity for our growing healthcare startup."
        link="https://athelaseng.substack.com/p/-build-internal-tools-fast-and-at"
      />

      <WritingEntry
        title={"Say Hello to Athelas One"}
        date={"October 29, 2021"}
        tags={["Athelas", "Healthcare"]}
        description="3-Minute FDA-Cleared Blood Diagnostics Powered by Cutting Edge Hardware and ML"
        link="https://athelaseng.substack.com/p/-say-hello-to-athelas-one"
      />

      <WritingEntry
        title={'Transcending Beyond "the Hack"'}
        date={"April 5, 2018"}
        tags={["Cal Hacks", "Hackathons"]}
        description="The Cal Hacks Fellowship is a program started by Cal Hacks (UC Berkeley’s Hackathon Organizers) to assist student developers in advancing their hackathon projects."
        link="https://medium.com/cal-hacks/the-cal-hacks-fellowship-transcending-beyond-the-hack-468a84a9db06"
      />

      <WritingEntry
        title={"4% of Hackers Tap into their Potential"}
        date={"July 4, 2017"}
        tags={["Hackathons"]}
        description="At the end of most hackathons, winners are awarded prizes, judges walk around and critique projects, and attendees gain a lot of value out of these events; however, most of the projects are not pursued after the closing ceremony at the hackathon"
        link="https://www.linkedin.com/pulse/only-4-hackers-tap-potential-heres-why-aakash-adesara/"
      />

      <Footer />
    </div>
  );
}
