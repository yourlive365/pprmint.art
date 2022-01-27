import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Container, Grid } from "@mui/material";
import Image from "material-ui-image";

import PylonScene from "./assets/pylon.svg";

function Wip() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Too early.</title>
				<meta
					name="description"
					content="This page is not quite ready yet. Check back at a later time."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">You're too early.</Typography>
			</div>
			<div className="content">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<Image
							src={PylonScene}
							width="100%"
							alt="A pylon."
							aspectRatio={16 / 9}
							color="transparent"
						/>
					</Grid>
					<Grid item xs={12} sm={6} style={{ alignSelf: "center" }}>
						<Typography variant="h2">Nothing to see here. Yet.</Typography>
						<Typography variant="body1">
							The page you were looking for is not quite ready yet. Check back
							again at a later date.
						</Typography>
						<br />
						<Link to="/">
							<Button variant="contained" size="large" color="warning">
								Leave for now
							</Button>
						</Link>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default Wip;
