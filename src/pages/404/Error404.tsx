import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from "material-ui-image";

import IceCreamCrimeScene from "./assets/ice_crime_scene.svg";

function FourOhFour() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Who's the culprit?</title>
				<meta
					name="description"
					content="This page was not fo- wait hang on, you shouldn't be seeing this if you're on Google or something. "
				/>
			</Helmet>
			<img className="header" src="./assets/blobs/404_header_blob.svg" />
			<Container className="wrapper">
				<Typography variant="h1" align="center">
					Who's the culprit?
				</Typography>
				<div className="content">
					<Grid container spacing={4}>
						<Grid item xs={12} sm={6}>
							<Image
								src={IceCreamCrimeScene}
								width="100%"
								alt="Ice cream at a crime scene."
								aspectRatio={16 / 9}
								color="transparent"
							/>
						</Grid>
						<Grid item xs={12} sm={6} style={{alignSelf: "center"}} >
							<Typography variant="h2">
								Nothing was found under this URL.
							</Typography>
							<Typography variant="body1">
								Either you misspelled the address, or the page doesn't exist
								anymore.
								<br />
								You can try one of the buttons at the top right, or just go back
								home.
							</Typography>
							<br />
							<Link to="/">
								<Button variant="outlined" size="large">
									Leave the scene
								</Button>
							</Link>
						</Grid>
					</Grid>
				</div>
			</Container>
		</>
	);
}

export default FourOhFour;
