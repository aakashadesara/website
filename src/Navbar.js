import { Link } from "react-router-dom";
import { ActionToggle } from "./components/colorSchemeToggle";
import { SpotlightControl } from "./components/Spotlight";
export const Navbar = (props) => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          fontSize: 12,
          marginTop: 8,
        }}
      >
        <Link to="/" style={{ width: "40%", cursor: "pointer" }}>
          AAKASH ADESARA
        </Link>
        <Link
          to="/work"
          style={{ width: "20%", textAlign: "right", cursor: "pointer" }}
        >
          WORK
        </Link>
        <Link
          to="/writing"
          style={{ width: "20%", textAlign: "right", cursor: "pointer" }}
        >
          WRITING
        </Link>
        <Link
          to="/music"
          style={{ width: "16%", textAlign: "right", cursor: "pointer" }}
        >
          MUSIC
        </Link>
        <Link
          to="/art"
          style={{ width: "12%", textAlign: "right", cursor: "pointer" }}
        >
          ART
        </Link>
        <Link
          to="/books"
          style={{ width: "18%", textAlign: "right", cursor: "pointer" }}
        >
          BOOKS
        </Link>{" "}
      </div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <SpotlightControl />
        <div style={{ width: "100%" }}></div>
        <ActionToggle />
      </div>
    </div>
  );
};
