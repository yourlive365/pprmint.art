import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container } from "@mui/material";
import {
	RiDiscordLine,
	RiMailLine,
	RiTwitterLine,
	RiYoutubeLine,
} from "react-icons/ri";

function About() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Contact and social media.</title>
				<meta
					name="description"
					content="Learn more about that one German weeb that also makes design-related things from time to time."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Name's Nick.</Typography>
				<Typography variant="h2">Glad to meet ya.</Typography>
			</div>
			<div className="content">
				<Typography variant="h2">General.</Typography>
				<Typography variant="body1">
					I'll give you more infos about how to stalk me at a later date. For
					now, know that I'm German and that I like design, music and anime.
				</Typography>
			</div>
		</>
	);
}

export default About;
