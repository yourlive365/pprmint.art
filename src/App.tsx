import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
	ThemeProvider,
	Theme,
	createTheme,
	StyledEngineProvider,
	CssBaseline,
	Grid,
	Container,
	Typography,
	IconButton,
	Divider,
} from "@mui/material";

// Imports of all the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import MintSansDL from "./pages/projects/mintsans/MintSans";
import MintBitDL from "./pages/projects/mintbit/MintBit";
import MintAltDL from "./pages/projects/mintalternative/MintAlt";
import MintcraftDL from "./pages/projects/mintcraft/Mintcraft";
import Win10TilesDL from "./pages/projects/win10tiles/WinTiles";
import Faq from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/404/Error404";

import Wordmark from "./globalassets/wordmark.svg";

import "./globalassets/fonts/archia.css";
import "./globalassets/fonts/basier_square.css";

import {
	RiBehanceLine,
	RiGithubLine,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0C6",
			dark: "#295",
			contrastText: "#111",
		},
		secondary: {
			main: "#19F",
			dark: "#17C",
			contrastText: "#111",
		},
		background: {
			default: "#111",
			paper: "#222",
		},
		text: {
			primary: "#EEE",
			secondary: "#BBB",
		},
		error: {
			main: "#F34",
			dark: "#B23",
			contrastText: "#111",
		},
		warning: {
			main: "#FB2",
			dark: "#D92",
			contrastText: "#111",
		},
		info: {
			main: "#19F",
			dark: "#17B",
			contrastText: "#111",
		},
		success: {
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
	},
	typography: {
		fontFamily:
			'"Basier Square", "Archia", "Roboto", Helvetica, Arial, sans-serif',
		h1: {
			fontFamily: '"Archia", "Roboto", Helvetica, Arial, sans-serif',
			color: "#EEE",
			fontWeight: 600,
			lineHeight: 1.2,
		},
		h2: {
			color: "#EEE",
			fontSize: "2.1rem",
			fontWeight: 600,
			lineHeight: 1.5,
		},
		h3: {
			color: "#EEE",
			fontSize: "1.5rem",
			fontWeight: 600,
			lineHeight: 1.5,
		},
		body1: {
			color: "#BBB",
			lineHeight: 1.5,
		},
	},
	shape: {
		borderRadius: 7,
	},
});

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Container maxWidth="xl">
					<CssBaseline />
					<Router>
						<Grid container style={{ minHeight: "calc(100vh - 212px)" }}>
							<Grid item xs={12} lg={2} style={{ padding: "20px 30px" }}>
								<Link
									to="/"
									style={{
										float: "right",
										animation:
											"fadeBottom 0.4s cubic-bezier(0, 0.7, 0.5, 1) 0.1s forwards",
										opacity: "0",
									}}
								>
									<img src={Wordmark} height="30px" alt="pprmint." />
								</Link>
								<div className="nav">
									<Link to="/">
										<Typography
											variant="h3"
											align="right"
											style={{ animationDelay: "0.12s" }}
										>
											Home
										</Typography>
									</Link>
									<Link to="/about">
										<Typography
											variant="h3"
											align="right"
											style={{ animationDelay: "0.14s" }}
										>
											About
										</Typography>
									</Link>
									<Link to="/projects">
										<Typography
											variant="h3"
											align="right"
											style={{ animationDelay: "0.16s" }}
										>
											Projects
										</Typography>
									</Link>
									<Link to="/contact">
										<Typography
											variant="h3"
											align="right"
											style={{ animationDelay: "0.18s" }}
										>
											Contact
										</Typography>
									</Link>
									<Link to="/faq">
										<Typography
											variant="h3"
											align="right"
											style={{ animationDelay: "0.2s" }}
										>
											FAQ
										</Typography>
									</Link>
									<br />
									<Divider />
								</div>
							</Grid>
							<Grid item xs={12} lg={10} sx={{ padding: "0 30px" }}>
								{/* All the different pages that exist here, pretty much. */}
								<Switch>
									<Route path={"/"} exact>
										<Home />
									</Route>
									<Route path={"/about"} exact>
										<About />
									</Route>
									<Route path={"/projects"} exact>
										<Projects />
									</Route>
									<Route path={"/projects/mintsans"} exact>
										<MintSansDL />
									</Route>
									<Route path={"/projects/mintbit"} exact>
										<MintBitDL />
									</Route>
									<Route path={"/projects/mintalt"} exact>
										<MintAltDL />
									</Route>
									<Route path={"/projects/mintcraft"} exact>
										<MintcraftDL />
									</Route>
									<Route path={"/projects/win10tiles"} exact>
										<Win10TilesDL />
									</Route>
									<Route path={"/faq"} exact>
										<Faq />
									</Route>
									<Route path={"/contact"} exact>
										<Contact />
									</Route>

									<Route component={Error404}>
										<Error404 />
									</Route>
								</Switch>
							</Grid>
						</Grid>
					</Router>
				</Container>
				<footer style={{ margin: "0 24px" }}>
					<div style={{ marginTop: "15px", float: "left" }}>
						<Typography variant="body2">
							2021, pprmint. Made with coffee, hosted on{" "}
							<a
								className="external"
								href="https://firebase.google.com/support/privacy/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Firebase
							</a>
							.
						</Typography>
					</div>
					<div style={{ float: "right" }}>
						<IconButton
							href="https://twitter.com/npprmint"
							target="_blank"
							rel="noopener noreferrer"
							size="large"
							sx={{ color: "text.primary", margin: "0 10px 10px 0" }}
						>
							<RiTwitterLine />
						</IconButton>
						<IconButton
							href="https://www.youtube.com/c/pprmint"
							target="_blank"
							rel="noopener noreferrer"
							size="large"
							sx={{ color: "text.primary", margin: "0 10px 10px 0" }}
						>
							<RiYoutubeLine />
						</IconButton>
						<IconButton
							href="https://www.behance.net/pprmint"
							target="_blank"
							rel="noopener noreferrer"
							size="large"
							sx={{ color: "text.primary", margin: "0 10px 10px 0" }}
						>
							<RiBehanceLine />
						</IconButton>
						<IconButton
							href="https://github.com/pprmint"
							target="_blank"
							rel="noopener noreferrer"
							size="large"
							sx={{ color: "text.primary", margin: "0 10px 10px 0" }}
						>
							<RiGithubLine />
						</IconButton>
					</div>
				</footer>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
