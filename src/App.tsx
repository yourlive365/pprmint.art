import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
    Grid,
    Container,
    Typography,
    IconButton,
} from "@material-ui/core";
import "./App.scss";

// Imports of all the pages
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Downloads from "./pages/downloads/Downloads";
import MintSansDL from "./pages/downloads/mintsans/MintSans";
import MintBitDL from "./pages/downloads/mintbit/MintBit";
import MintAltDL from "./pages/downloads/mintalternative/MintAlt";
import MintcraftDL from "./pages/downloads/mintcraft/Mintcraft";
import Win10TilesDL from "./pages/downloads/win10tiles/WinTiles";
import HealthSafety from "./pages/healthsafety/HealthSafety";
import Faq from "./pages/faq/FAQ";
import Error404 from "./pages/404/Error404";

import Logo from "./assets/logo.svg";
import LogoHome from "./assets/logo_home.svg";

import "./assets/fonts/archia.css";
import { RiBehanceLine, RiDiscordLine, RiGithubLine, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";

const theme = createTheme({
    palette: {
        type: "dark",
        primary: { main: "#3dd17f" },
        secondary: { main: "#256eff" },
        error: { main: "#e63846" },
        background: { default: "#0a0a0a", paper: "#121212" },
    },
    typography: {
        fontFamily: '"Archia", "Roboto", Helvetica, Arial, sans-serif',
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
                <Grid container className="wrapper">
                    <Grid item xs={12} sm={3}>
                        {/* All the different pages that exist here, pretty much. */}
                        <Link to="/">
                            <Typography variant="h3" align="right" className="active">
                                Home
                            </Typography>
                        </Link>
                        <Link to="/">
                            <Typography variant="h3" align="right">
                                About
                            </Typography>
                        </Link>
                        <Link to="/works">
                            <Typography variant="h3" align="right">
                                Projects
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={9}>
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
                            <Route path={"/downloads/mintbit"} exact>
                                <MintBitDL />
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

                            <Route component={Error404}>
                                <Error404 />
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
            <footer>
                <div className="left" style={{ marginTop: "15px", }}>
                    <Typography variant="body2">
                        2021, pprmint.May contain nuts and links to external websites.
                    </Typography>
                </div>
                <div className="right">
                    <IconButton href="https://twitter.com/npprmint" target="_blank" rel="noopener noreferrer">
                        <RiTwitterLine />
                    </IconButton>
                    <IconButton href="https://www.youtube.com/c/pprmint" target="_blank" rel="noopener noreferrer">
                        <RiYoutubeLine />
                    </IconButton>
                    <IconButton href="https://www.behance.net/pprmint" target="_blank" rel="noopener noreferrer">
                        <RiBehanceLine />
                    </IconButton>
                    <IconButton href="https://github.com/pprmint" target="_blank" rel="noopener noreferrer">
                        <RiGithubLine />
                    </IconButton>
                    <IconButton href="https://discord.gg/Vw9JXwr" target="_blank" rel="noopener noreferrer">
                        <RiDiscordLine />
                    </IconButton>
                </div>
            </footer>
        </ThemeProvider>
    );
}

export default App;
