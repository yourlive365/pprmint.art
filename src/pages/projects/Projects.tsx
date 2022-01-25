import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActions,
} from "@mui/material";

import MintcraftCardHeader from "./mintcraft/assets/mintcraft.svg";
import MintSansCardHeader from "./mintsans/assets/mintsans.svg";

function Projects() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Projects.</title>
				<meta
					name="description"
					content="Download things I made, like fonts, my Minecraft ressource pack or my Windows 10 start menu tiles."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Things I made.</Typography>
				<Typography variant="h2">
					Visit the <Link to="/contact">FAQ</Link> to learn more about terms of use.
				</Typography>
			</div>
			<div className="content">
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								image={MintcraftCardHeader}
								alt="Mintcraft logo"
							/>
							<CardContent>
								<Typography variant="h2">A Minecraft resource pack</Typography>
								<Typography variant="body1">
									What started as a simple "I don't like the colors of the
									default Minceraft UI" ended with me trying to make the UI look
									more modern, changing up the colors and a bit of the
									iconography.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintcraft/Mintcraft_1.4-118.zip"
									download
									color="warning"
								>
									Download latest
								</Button>
								<Link to="/projects/mintcraft">
									<Button color="inherit">Learn more</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								image={MintSansCardHeader}
								alt="MintSans- well, it's hardly a logo, more like just the name of the font set in MintSans itself."
							/>
							<CardContent>
								<Typography variant="h2">A sans-serif font</Typography>
								<Typography variant="body1">
									My first attempt at creating a geometric font family. A more
									optimized version is in development and will take at least
									thrice as long as it has taken me to make the following page.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintsans_2.0.zip"
									download
									color="secondary"
								>
									Download latest
								</Button>
								<Link to="/projects/mintsans">
									<Button color="inherit">Learn more</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							{/* <CardMedia
								component="img"
								image={MintSansCardHeader}
								alt="MintSans- well, it's hardly a logo, more like just the name of the font set in MintSans itself."
							/> */}
							<CardContent>
								<Typography variant="h2">A Material-inspired font</Typography>
								<Typography variant="body1">
									I looked at Google's Material icons, noticed some had text in
									them, and went "Huh." The good: Numbers. The bad: That stupid
									name. And the page for this font. That's still in the works.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintalternative_1.1.zip"
									download
									color="error"
								>
									Download latest
								</Button>
								{/* <Link to="/projects/mintsans"> */}
								<Button color="inherit" disabled>
									Learn more
								</Button>
								{/* </Link> */}
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							{/* <CardMedia
								component="img"
								image={MintSansCardHeader}
								alt="MintSans- well, it's hardly a logo, more like just the name of the font set in MintSans itself."
							/> */}
							<CardContent>
								<Typography variant="h2">A tile icon pack.</Typography>
								<Typography variant="body1">
									Remember when the Windows start menu wasn't shit, then it was,
									then it kinda wasn't, then Windows 11 came? This page has one
									thing in common with tiles in the new start menu: They don't
									exist.{" "}
									<a
										className="external"
										href="https://www.stardock.com/products/start11/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Stardock
									</a>{" "}
									filled one of those gaps though.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/win10tiles.zip"
									download
									color="primary"
								>
									Download latest
								</Button>
								{/* <Link to="/projects/mintsans"> */}
								<Button color="inherit" disabled>
									Learn more
								</Button>
								{/* </Link> */}
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default Projects;
