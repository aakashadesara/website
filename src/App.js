import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Art } from "./Art";
import { Books } from "./Books";
import { Homepage } from "./Homepage";
import { Work } from "./Work";
import { Writing } from "./Writing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/#/work" element={<Work />} />
        <Route path="/work" element={<Work />} />

        <Route path="/#/writing" element={<Writing />} />
        <Route path="/writing" element={<Writing />} />

        <Route path="/#/art" element={<Art />} />
        <Route path="/art" element={<Art />} />

        <Route path="/books" element={<Books />} />
        <Route path="/#/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
