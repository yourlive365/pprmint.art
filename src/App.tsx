import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
	ThemeProvider,
	CssBaseline,
	createTheme,
	AppBar,
	Container,
	IconButton,
	Button,
	Divider,
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

import Wordmark from "./assets/wordmark.svg";

import "@fontsource/dm-sans";
import "@fontsource/podkova";

import {
	RiPaintBrushLine,
	RiFileDownloadLine,
	RiMailLine,
	RiQuestionnaireLine,
} from "react-icons/ri";

const theme = createTheme({
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
				<AppBar position="fixed" elevation={2}>
					<Container maxWidth="xl">
						<div className="left">
							<Link to="/">
								<img
									src={Wordmark}
									height="30px"
									style={{ marginTop: "19px" }}
									alt="pprmint."
								/>
							</Link>
						</div>
						<div className="navlinks">
							{/* These are the full text buttons displayed on larger displays.
                            I just couldn't be assed to get a drawer to work in here. lmfao */}
							<div className="navbuttons">
								<Link className="first" to="/works" href="#top">
									<Button>Works</Button>
								</Link>
								<Link to="/downloads" href="#top">
									<Button>Downloads</Button>
								</Link>
								<Link to="/faq" href="#top">
									<Button>FAQ</Button>
								</Link>
								<Link to="/contact" href="#top">
									<Button>Contact</Button>
								</Link>
							</div>
							{/* This div only displays at sizes 599px and below. At 400 the left and right padding
                            of these buttons decreases as well, so they don't break out of the nav bar. */}
							<div className="navicons">
								<Link className="first" to="/works">
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
										<RiMailLine />
									</IconButton>
								</Link>
								<Link to="/contact">
									<IconButton>
										<RiQuestionnaireLine />
									</IconButton>
								</Link>
							</div>
						</div>
					</Container>
				</AppBar>

				{/* All the different pages that exist here, pretty much. */}
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
			</Router>
		</ThemeProvider>
	);
}

export default App;
