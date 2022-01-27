import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Card,
	CardContent,
	CardMedia,
	CardActions,
} from "@mui/material";

import Image from "material-ui-image";

import {
	RiDownload2Line,
	RiArrowRightUpLine,
	RiAddLine,
	RiSubtractLine,
	RiCheckboxCircleLine,
	RiCloseCircleLine,
} from "react-icons/ri";

import MintcraftBanner from "./assets/mintcraft.svg";

import SlideOne from "./assets/slide1.png";
import SlideTwo from "./assets/slide2.png";
import SlideThree from "./assets/slide3.png";

import MintcraftPack from "./assets/mintcraft_pack.svg";
import MintbitPack from "./assets/mintbit_pack.svg";
import SoundsPack from "./assets/sounds_pack.svg";

function MintcraftDL() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Mintcraft.</title>
				<meta
					name="description"
					content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft. It's basically dark mode Minecraft with some fancy new icons here and there."
				/>
			</Helmet>
			<div className="title">
				<Card elevation={0} variant="outlined">
					<Image
						src={MintcraftBanner}
						width="100%"
						aspectRatio={20 / 5}
						alt="Mintcraft logo"
						color="transparent"
					/>
				</Card>
			</div>

			<div className="content">
				<Typography variant="h2">Changes in version 1.4</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<RiAddLine />
						</ListItemIcon>
						<ListItemText>Added support for Minecraft 1.18.</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiArrowRightUpLine />
						</ListItemIcon>
						<ListItemText>
							Updated accent colors and those of the hunger bar.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiArrowRightUpLine />
						</ListItemIcon>
						<ListItemText>
							Updated texture for beacon UI to have another divider line.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiArrowRightUpLine />
						</ListItemIcon>
						<ListItemText>
							Updated textures for some icon buttons to move on hover.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiArrowRightUpLine />
						</ListItemIcon>
						<ListItemText>
							Updated Mintcraft logos on loading and title screen.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiArrowRightUpLine />
						</ListItemIcon>
						<ListItemText>Updated resouce pack icons.</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiSubtractLine />
						</ListItemIcon>
						<ListItemText>Removed music by C418.</ListItemText>
					</ListItem>
				</List>
				<br />
				<Card elevation={0}>
					<Image
						src={SlideOne}
						width="100%"
						alt="Title screen"
						aspectRatio={240 / 119}
						color="transparent"
					/>
					<Image
						src={SlideTwo}
						width="100%"
						alt="Button and hotbar"
						aspectRatio={192 / 77}
						color="transparent"
					/>
					<Image
						src={SlideThree}
						width="100%"
						alt="UI containers"
						aspectRatio={1 / 1}
						color="transparent"
					/>
				</Card>
				<Typography variant="h2">Dos and Don'ts</Typography>
				<Typography variant="h3" color="#0c6">
					Do:
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<RiCheckboxCircleLine />
						</ListItemIcon>
						<ListItemText>
							Use and modify Mintcraft and/or its add-ons to your liking and for
							personal use.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiCheckboxCircleLine />
						</ListItemIcon>
						<ListItemText>
							Use this pack, its add-ons or your modification in online content,
							like YouTube videos
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiCheckboxCircleLine />
						</ListItemIcon>
						<ListItemText>
							Share this pack, or your modified version of it, with friends
							<i> privately</i>.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiCheckboxCircleLine />
						</ListItemIcon>
						<ListItemText>
							<i>Optional:</i> Credit me somewhere when you use my pack by
							linking to this website.
						</ListItemText>
					</ListItem>
				</List>
				<Typography variant="h3" color="#f34">
					Don't:
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<RiCloseCircleLine />
						</ListItemIcon>
						<ListItemText>
							Share versions, parts and/or modifications of Mintcraft and/or its
							add-ons publicly.
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RiCloseCircleLine />
						</ListItemIcon>
						<ListItemText>
							Host, mirror, sell or otherwise redistribute versions, parts
							and/or modifications of Mintcraft and/or its add-ons anywhere.
						</ListItemText>
					</ListItem>
				</List>
				<br />
				<Typography variant="h2">Credits</Typography>
				<Typography variant="h3">
					<a
						className="external"
						href="https://vanillatweaks.net"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vanilla Tweaks
					</a>
				</Typography>

				<Typography variant="body1">
					JSON files to fix some text colors. Remember how I said this pack was
					only compatible with 3 languages? Yeah that was fixed with this.
				</Typography>
				<br />
				<Typography variant="h2">How to install</Typography>
				<Typography variant="body1">
					If you haven't already,{" "}
					<a
						className="external"
						href="https://optifine.net/downloads"
						target="_blank"
						rel="noopener noreferrer"
					>
						install Optifine
					</a>{" "}
					before you start using this pack. After you downloaded the pack and
					maybe some add-ons as well, paste them into your resource packs
					folder. You can open it from the game by clicking on [Options...],
					[Resource Packs...] and then [Open Pack Folder]. Now just put
					Mintcraft at the very top and blam, you're good to go.
					<br />
					The add-ons don't necessarily need to be in a certain order. However,
					if you have other packs installed that change things like the font and
					sounds, you might wanna put my add-ons above those as well.
				</Typography>
				<br />
				<Typography variant="h2">Downloads</Typography>
				<br />
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								image={MintcraftPack}
								alt="Mintbit add-on icon"
							/>
							<CardContent>
								<Typography variant="h2">Mintcraft</Typography>
								<Typography variant="body1">
									Your scrolling efforts shall be rewarded with download
									buttons.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintcraft/Mintcraft_1.4-118.zip"
									download
									color="warning"
									startIcon={<RiDownload2Line />}
								>
									Download for 1.18.X
								</Button>
								<Button
									href="/download/mintcraft/Mintcraft_1.3-117.zip"
									download
									color="inherit"
								>
									1.17.X
								</Button>
								<Button
									href="/download/mintcraft/Mintcraft_1.1-116.zip"
									download
									color="inherit"
								>
									1.16.X
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								image={MintbitPack}
								alt="Mintbit add-on icon"
							/>
							<CardContent>
								<Typography variant="h2">Mintbit add-on</Typography>
								<Typography variant="body1">
									A font that I specifically made to use with Mintcraft. Need
									more convincing? This font is used in the screenshots a bit
									above, as well as in these cards' headers.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintcraft/Mintbit_Add-on_1.0-118.zip"
									download
									color="warning"
									startIcon={<RiDownload2Line />}
								>
									Download for 1.18.X
								</Button>
								<Button
									href="/download/mintcraft/Mintbit_Add-on_1.0-117.zip"
									download
									color="inherit"
								>
									1.17.X
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								image={SoundsPack}
								alt="Sounds add-on icon"
							/>
							<CardContent>
								<Typography variant="h2">Sounds add-on</Typography>
								<Typography variant="body1">
									Despite this add-on being named after the plural of a word,
									this pack actually just replaces one sound, which is the
									button click sound. This one is similar, but less jarring.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									href="/download/mintcraft/Sounds_Add-on_1.0-118.zip"
									download
									color="warning"
									startIcon={<RiDownload2Line />}
								>
									Download for 1.18.X
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<br />
			</div>
		</>
	);
}

export default MintcraftDL;
