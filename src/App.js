import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Art } from "./Art";
import { Books } from "./Books";
import { Homepage } from "./Homepage";
import { Work } from "./Work";
import { Writing } from "./Writing";
import { Music } from "./Music";

import { Keysho } from "keysho";
import "keysho/dist/index.css";

function App() {
  return (
    <>
      <Keysho
        config_uuid={"b46acd46-e92c-11ec-995a-1eab7e003dc6"}
        actionMap={{}}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/work" element={<Work />} />

          <Route path="/writing" element={<Writing />} />

          <Route path="/music" element={<Music />} />

          <Route path="/art" element={<Art />} />

          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
