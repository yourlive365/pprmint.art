import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  AppBar,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import "./App.scss";
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Downloads from "./pages/downloads/Downloads";
import Faq from "./pages/faq/FAQ";
import Support from "./pages/support/Support";
import MintSansDL from "./pages/downloads/mintsans/MintSans";
import MintAltDL from "./pages/downloads/mintalternative/MintAlt";
import MintcraftDL from "./pages/downloads/mintcraft/Mintcraft";
import Win10TilesDL from "./pages/downloads/win10tiles/WinTiles";
import HealthSafety from "./pages/healthsafety/HealthSafety";
import Error404 from "./pages/404/Error404";

import Wordmark from "./assets/wordmark.svg";
import UnderConstruction from "./assets/under_construction.svg";
import Leaf from "./assets/leaf.svg";

import "@fontsource/dm-sans";
import "@fontsource/dm-serif-display";
import "@fontsource/dm-serif-text";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#3dd17f" },
    secondary: { main: "#256eff" },
    error: { main: "#e63846" },
    background: { default: "#0a0a0a", paper: "#121212" },
  },
  typography: {
    fontFamily: '"DM Sans", "Roboto", Helvetica, Arial, sans-serif',
  },
  props: {
    MuiButton: {
      disableFocusRipple: true,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="absolute" color="transparent" elevation={0}>
          <Container maxWidth="xl">
            <div id="left">
              <Link to="/">
                <img
                  src={Wordmark}
                  height="30px"
                  style={{ marginTop: "20px" }}
                  alt="pprmint."
                />
              </Link>
            </div>
            <div id="right">
              {/* soonTM */}
            </div>

            {/* <div id="navlinks">
              <Link to="/works">
                <IconButton>
                  <RiPaintBrushLine />
                </IconButton>
              </Link>
              <Link to="/downloads">
                <IconButton>
                  <RiFileDownloadLine />
                </IconButton>
              </Link>
              <Link to="/faq">
                <IconButton>
                  <RiQuestionnaireLine />
                </IconButton>
              </Link>
              <Link to="/contact">
                <IconButton>
                  <RiMailLine />
                </IconButton>
              </Link>
              <Link to="/support">
                <IconButton>
                  <RiHandHeartLine />
                </IconButton>
              </Link>
            </div> */}
          </Container>
        </AppBar>

        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>

          <Route path={"/works"} exact>
            <Works />
          </Route>

          <Route path={"/downloads"} exact>
            <Downloads />
          </Route>
          <Route path={"/downloads/mintsans"} exact>
            <MintSansDL />
          </Route>
          <Route path={"/downloads/mintalt"} exact>
            <MintAltDL />
          </Route>
          <Route path={"/downloads/mintcraft"} exact>
            <MintcraftDL />
          </Route>
          <Route path={"/downloads/win10tiles"} exact>
            <Win10TilesDL />
          </Route>

          <Route path={"/healthsafety"} exact>
            <HealthSafety />
          </Route>

          <Route path={"/contact"} exact>
            <Contact />
          </Route>

          <Route path={"/faq"} exact>
            <Faq />
          </Route>

          <Route path={"/support"} exact>
            <Support />
          </Route>

          <Route component={Error404}>
            <Error404 />
          </Route>
        </Switch>
        <footer>
          <Link to="/">
            <img src={Leaf} height="20px" />
          </Link>
          <div id="footerlinks">
            <Link id="first" to="/works">
              Works
            </Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support me</Link>
          </div>
        </footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
