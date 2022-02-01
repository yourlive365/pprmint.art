import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Container, Grid } from "@mui/material";
import Image from "material-ui-image";

import IceCreamCrimeScene from "./assets/ice_crime_scene.svg";

function FourOhFour() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Page not found • pprmint.art</title>
				<meta
					name="description"
					content="This page was not found. Unless you found it on Google, somehow, which means you technically found it...?"
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Who's the culprit?</Typography>
			</div>
			<div className="content">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<Image
							src={IceCreamCrimeScene}
							alt="Someone killed the ice cream."
							aspectRatio={2 / 1}
							color="transparent"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={{ alignSelf: "center" }}>
						<Typography variant="h2">Nothing to see here.</Typography>
						<Typography variant="body1">
							The page you were looking for was <s>killed</s> not found. We're
							unsure about the motive, but we're working on it.
						</Typography>
						<br />
						<Link to="/">
							<Button variant="contained" size="large" color="warning">
								Leave the scene
							</Button>
						</Link>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default FourOhFour;
