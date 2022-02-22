import React from "react";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	Container,
	Card,
	CardContent,
	CardActions,
	Skeleton,
} from "@mui/material";
import Image from "material-ui-image";

import { RiDownload2Line } from "react-icons/ri";

import Win10TilesBanner from "./assets/win10tiles.svg";

import AfterEffects from "./assets/After_Effects.png";
import Aseprite from "./assets/Aseprite.png";
import Audition from "./assets/Audition.png";
import Blender from "./assets/Blender.png";
import Bundled from "./assets/Bundled.png";
import Cinema4D from "./assets/Cinema_4D.png";
import Code from "./assets/Code.png";
import Designer from "./assets/Designer.png";
import Discord from "./assets/Discord.png";
import Dolphin from "./assets/Dolphin.png";
import Excel from "./assets/Excel.png";
import FlStudio from "./assets/FL_Studio.png";
import Live from "./assets/Live.png";
import MediaEncoder from "./assets/Media_Encoder.png";
import MinecraftBedrock from "./assets/Minecraft_Bedrock.png";
import MinecraftJava from "./assets/Minecraft_Java.png";
import Netflix from "./assets/Netflix.png";
import Obs from "./assets/OBS.png";
import Osu from "./assets/osu.png";
import Pcsx2 from "./assets/PCSX2.png";
import Photo from "./assets/Photo.png";
import PowerPoint from "./assets/PowerPoint.png";
import Premiere from "./assets/Premiere.png";
import PrimeVideo from "./assets/Prime_Video.png";
import ProtonMail from "./assets/ProtonMail.png";
import Publisher from "./assets/Publisher.png";
import QBittorrent from "./assets/qBittorrent.png";
import Spotify from "./assets/Spotify.png";
import Steam from "./assets/Steam.png";
import Telegram from "./assets/Telegram.png";
import Vmware from "./assets/Vmware.png";
import WhatsApp from "./assets/WhatsApp.png";
import Word from "./assets/Word.png";

const tiles = [
	{ src: Audition },
	{ src: MediaEncoder },
	{ src: Premiere },
	{ src: Designer },
	{ src: Photo },
	{ src: Publisher },
	{ src: Aseprite },
	{ src: Blender },
	{ src: Bundled },
	{ src: Cinema4D },
	{ src: Code },
	{ src: Discord },
	{ src: Dolphin },
	{ src: FlStudio },
	{ src: Live },
	{ src: Word },
	{ src: Excel },
	{ src: PowerPoint },
	{ src: MinecraftJava },
	{ src: MinecraftBedrock },
	{ src: Netflix },
	{ src: Obs },
	{ src: Osu },
	{ src: Pcsx2 },
	{ src: PrimeVideo },
	{ src: ProtonMail },
	{ src: Spotify },
	{ src: Steam },
	{ src: Telegram },
	{ src: Vmware },
	{ src: WhatsApp },
	{ src: QBittorrent },
];

function Win10TilesDL() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Start menu tiles • pprmint.art</title>
				<meta
					name="description"
					content="Make your start menu pretty (maybe) by using these in yours. Best if you're running version 20H2 or later."
				/>
			</Helmet>
			<div className="title">
				<Card elevation={0} variant="outlined">
					<Image
						src={Win10TilesBanner}
						width="100%"
						aspectRatio={20 / 5}
						alt="Mintcraft logo"
						color="transparent"
					/>
				</Card>
			</div>
			<div className="content">
				<Grid container spacing={1}>
					{tiles.map((item) => (
						<Grid item xs={4} sm={2}>
							<Image
								src={item.src}
								width="100%"
								color="#222222"
								alt=""
								loading={
									<Skeleton
										variant="rectangular"
										animation="wave"
										width="100%"
										height="100%"
									/>
								}
							/>
						</Grid>
					))}
				</Grid>
				<br />
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h2">Start menu tiles</Typography>
						<Typography variant="body1">
							To use these you'll need something like{" "}
							<a
								className="external"
								href="http://github.com/Jonno12345/TileIconifier"
								target="_blank"
								rel="noopener noreferrer"
							>
								TileIconifier
							</a>{" "}
							and{" "}
							<a
								className="external"
								href="https://www.stardock.com/products/start11/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Start11
							</a>{" "}
							on Windows 11 to get the previous start menu(s) back.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							href="/assets/downloads/win10tiles.zip"
							download
							color="primary"
							startIcon={<RiDownload2Line />}
						>
							Download
						</Button>
					</CardActions>
				</Card>
			</div>
		</>
	);
}

export default Win10TilesDL;
