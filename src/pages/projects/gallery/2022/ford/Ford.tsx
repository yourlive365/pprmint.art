import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Typography, Card, Skeleton } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/ford-m.mp4";
import SlideTwo from "./assets/ford-b.svg";
import SlideThree from "./assets/ford-slogan.svg";

function Ford() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>A Ford rebrand concept • pprmint.art</title>
				<meta
					name="description"
					content="Inspired by a design by Paul Rand in 1966."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Ford rebrand.</Typography>
				<Typography variant="h2">
					Concept inspired by a design by Paul Rand in 1966.
				</Typography>
			</div>
			<div className="content">
				<Card elevation={0}>
					<video
						src={SlideOne}
						width="100%"
						height="100%"
						autoPlay
						loop
						controls
						muted
					/>
					<a href={SlideTwo} target="_blank">
						<Image
							src={SlideTwo}
							width="100%"
							alt="Ford logo outline on a blue background."
							aspectRatio={16 / 9}
							color="transparent"
							loading={
								<Skeleton
									variant="rectangular"
									animation="wave"
									width="100%"
									height="100%"
								/>
							}
						/>
					</a>
					<a href={SlideThree} target="_blank">
						<Image
							src={SlideThree}
							width="100%"
							alt="Slogan, literally translated from the German one currently in use... I think."
							aspectRatio={16 / 9}
							color="transparent"
							loading={
								<Skeleton
									variant="rectangular"
									animation="wave"
									width="100%"
									height="100%"
								/>
							}
						/>
					</a>
				</Card>
			</div>
		</>
	);
}

export default Ford;
