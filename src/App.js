import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { SpotlightProvider, openSpotlight } from "@mantine/spotlight";

import "./App.css";
import { Art } from "./Art";
import { Books } from "./Books";
import { Homepage } from "./Homepage";
import { Work } from "./Work";
import { Writing } from "./Writing";
import { Music } from "./Music";

import { Keysho } from "keysho";
import "keysho/dist/index.css";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NewHomepage } from "./NewHomepage";
import { SPOTLIGHT_ACTIONS } from "./components/Spotlight";
import { IconSearch } from "@tabler/icons";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      {/* <Keysho config_uuid="b46acd46-e92c-11ec-995a-1eab7e003dc6" /> */}

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: colorScheme }}
        >
          <SpotlightProvider
            actions={SPOTLIGHT_ACTIONS}
            searchIcon={<IconSearch size={18} />}
            searchPlaceholder="Search..."
            shortcut={["mod + P", "mod + K"]}
            nothingFoundMessage="Nothing found..."
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />

                <Route path="/new" element={<NewHomepage />} />

                <Route path="/work" element={<Work />} />

                <Route path="/writing" element={<Writing />} />

                <Route path="/music" element={<Music />} />

                <Route path="/art" element={<Art />} />

                <Route path="/books" element={<Books />} />
              </Routes>
            </BrowserRouter>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
