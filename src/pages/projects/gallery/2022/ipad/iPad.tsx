import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Typography, Card, Skeleton } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/ipad.png";

function ArchWall() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>iPad • pprmint.art</title>
				<meta
					name="description"
					content="Inspired by a design by Paul Rand in 1966."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">iPad.</Typography>
				<Typography variant="h2">
					The i stands for isometric.{" "}
					<Typography variant="caption">That's a lie.</Typography>
				</Typography>
			</div>
			<div className="content">
				<a href={SlideOne} target="_blank">
					<Card elevation={0}>
						<Image
							src={SlideOne}
							width="100%"
							alt="An iPad made as part of a completely differnet project."
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
					</Card>
				</a>
				<br />
				<Typography variant="body2">
					Part of a completely different project but still looked neat on its
					own.
				</Typography>
			</div>
		</>
	);
}

export default ArchWall;
