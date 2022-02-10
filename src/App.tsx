import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	NavLink,
} from "react-router-dom";
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
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

// Imports of all the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import MintsansDL from "./pages/projects/mintsans/Mintsans";
import MintBitDL from "./pages/projects/mintbit/MintBit";
import MintAltDL from "./pages/projects/mintalternative/MintAlt";
import MintcraftDL from "./pages/projects/mintcraft/Mintcraft";
import Win10TilesDL from "./pages/projects/win10tiles/Win10Tiles";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/404/Error404";
import UnderConstruction from "./pages/wip/UnderConstruction";

import Wordmark from "./globalassets/wordmark.svg";

/* import "./globalassets/fonts/archia.css"; */
import "./globalassets/fonts/silka.css";
import "./globalassets/fonts/basier_square.css";

import {
	RiBehanceLine,
	RiGithubLine,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";

function IconLink(
	props: React.PropsWithChildren<{ href: string; delay: string }>
) {
	return (
		<IconButton
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			size="large"
			style={{ animationDelay: props.delay }}
		>
			{props.children}
		</IconButton>
	);
}

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
		secondary: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
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
			light: "#F34",
			main: "#F34",
			dark: "#f34",
			contrastText: "#111",
		},
		warning: {
			light: "#FB2",
			main: "#FB2",
			dark: "#d92",
			contrastText: "#111",
		},
		info: {
			light: "#19F",
			main: "#19F",
			dark: "#17c",
			contrastText: "#111",
		},
		success: {
			light: "#0C6",
			main: "#0C6",
			dark: "#095",
			contrastText: "#111",
		},
	},
	typography: {
		fontFamily:
			'"Basier Square", "Silka", "Roboto", Helvetica, Arial, sans-serif',
		h1: {
			fontFamily: '"Silka", "Roboto", Helvetica, Arial, sans-serif',
			color: "#EEE",
			fontWeight: 600,
		},
		h2: {
			fontFamily: '"Silka", "Roboto", Helvetica, Arial, sans-serif',
			color: "#EEE",
			fontSize: "2.1rem",
			fontWeight: 600,
			padding: ".3rem 0",
		},
		h3: {
			fontFamily: '"Silka", "Roboto", Helvetica, Arial, sans-serif',
			color: "#EEE",
			fontSize: "1.5rem",
			fontWeight: 600,
			padding: ".3rem 0",
		},
		body1: {
			color: "#BBB",
			lineHeight: 1.5,
		},
	},
	shape: {
		borderRadius: 4,
	},
	components: {
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: "#222",
				},
			},
		},
	},
});

const Navigation = () => (
	<nav>
		<NavLink
			exact
			activeClassName="active"
			to="/"
			style={{ animationDelay: "0.14s" }}
		>
			Home
		</NavLink>
		<NavLink
			activeClassName="active"
			to="/about"
			style={{ animationDelay: "0.18s" }}
		>
			About
		</NavLink>
		<NavLink
			activeClassName="active"
			to="/projects"
			style={{ animationDelay: "0.22s" }}
		>
			Projects
		</NavLink>
		<NavLink
			activeClassName="active"
			to="/contact"
			style={{ animationDelay: "0.26s" }}
		>
			Contact & FAQ
		</NavLink>
		<br />
		<Divider />
	</nav>
);

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Grid container style={{ minHeight: "calc(100vh - 212px)" }}>
						<Grid item xs={12} lg={2.5} sx={{ padding: "15px 30px" }}>
							<Link
								to="/"
								style={{
									float: "right",
									animation:
										"fadeBottom 0.4s cubic-bezier(0, 0.7, 0.5, 1) 0.1s forwards",
									opacity: "0",
								}}
							>
								<img src={Wordmark} height="35px" alt="pprmint." />
							</Link>
							<Navigation />
						</Grid>
						<Grid item xs={12} lg={7} sx={{ padding: "0 30px" }}>
							{/* All the different pages that exist here, pretty much. */}
							<Switch>
								<Route path={"/"} exact>
									<Home />
								</Route>
								<Route path={"/about"} exact>
									{/* <About /> */}
									<UnderConstruction />
								</Route>
								<Route path={"/projects"} exact>
									<Projects />
								</Route>
								<Route path={"/projects/mintsans"} exact>
									<MintsansDL />
								</Route>
								{/* <Route path={"/projects/mintbit"} exact>
									<MintBitDL />
								</Route>
								<Route path={"/projects/mintalt"} exact>
									<MintAltDL />
								</Route> */}
								<Route path={"/projects/mintcraft"} exact>
									<MintcraftDL />
								</Route>
								<Route path={"/projects/win10tiles"} exact>
									<Win10TilesDL />
								</Route>
								<Route path={"/contact"} exact>
									<Contact />
								</Route>

								<Route path={"/works"} exact>
									<Redirect to="/projects" />
								</Route>
								<Route path={"/downloads"} exact>
									<Redirect to="/projects" />
								</Route>
								<Route path={"/faq"} exact>
									<Redirect to="/contact" />
								</Route>
								<Route path={"/mintcraft"} exact>
									<Redirect to="/projects/mintcraft" />
								</Route>
								<Route path={"/mintsans"} exact>
									<Redirect to="/projects/mintsans" />
								</Route>
								<Route path={"/mintalt"} exact>
									<Redirect to="/projects/mintalt" />
								</Route>
								<Route path={"/win10tiles"} exact>
									<Redirect to="/projects/win10tiles" />
								</Route>

								<Route component={Error404}>
									<Error404 />
								</Route>
							</Switch>
						</Grid>
					</Grid>
				</Router>
				<footer>
					<div className="copyright">
						<Typography variant="body2">
							2022, pprmint.
							<br />
							Made with coffee and hosted on{" "}
							<a
								className="external"
								href="https://firebase.google.com/support/privacy/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Firebase
							</a>
						</Typography>
					</div>
					<div className="iconlinks">
						<IconLink href="https://twitter.com/npprmint" delay="0.22s">
							<RiTwitterLine />
						</IconLink>
						<IconLink href="https://www.youtube.com/c/pprmint" delay="0.26s">
							<RiYoutubeLine />
						</IconLink>
						<IconLink href="https://www.behance.net/pprmint" delay="0.3s">
							<RiBehanceLine />
						</IconLink>
						<IconLink href="https://github.com/pprmint" delay="0.34s">
							<RiGithubLine />
						</IconLink>
					</div>
				</footer>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
