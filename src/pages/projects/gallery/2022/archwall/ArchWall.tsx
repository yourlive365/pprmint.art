import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Typography, Card, Skeleton } from "@mui/material";

import Image from "material-ui-image";

import SlideOne from "./assets/arch_with_blue_mountains.png";
import SlideTwo from "./assets/arch_screenshot.png";

function ArchWall() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Arch btw wallpaper • pprmint.art</title>
				<meta
					name="description"
					content="A wallpaper made to be used on Arch Linux with the Qogir theme. Very specific indeed."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Arch wallpaper.</Typography>
				<Typography variant="h2">I use Arch btw.</Typography>
			</div>
			<div className="content">
				<a href={SlideOne} target="_blank">
					<Card elevation={0}>
						<Image
							src={SlideOne}
							width="100%"
							alt="The wallpaper in all its glory."
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
					The wallpaper. Feel free to right-click and save.
				</Typography>
				<br />
				<a href={SlideTwo} target="_blank">
					<Card elevation={0}>
						<Image
							src={SlideTwo}
							width="100%"
							alt="A screenshot showing this wallpaper applied to KDE Plasma with the Qogir theme enabled."
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
					This theme was made to be used together with the{" "}
					<a
						className="external"
						href="https://github.com/vinceliuice/Qogir-theme"
						target="_blank"
						rel="noreferrer noopener"
					>
						Qogir GTK
					</a>{" "}
					or{" "}
					<a
						className="external"
						href="https://github.com/vinceliuice/Qogir-kde"
						target="_blank"
						rel="noreferrer noopener"
					>
						KDE
					</a>{" "}
					theme.
				</Typography>
			</div>
		</>
	);
}

export default ArchWall;
