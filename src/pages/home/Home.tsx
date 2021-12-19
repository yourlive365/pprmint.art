import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Container,
	Typography,
	Card,
	CardContent,
	Grid,
	Button,
} from "@mui/material";
import Image from "material-ui-image";

import NewsMintcraft from "./assets/mintcraft.svg";
import NewsMuiFive from "./assets/mui5.svg";

function Home() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Good today.</title>
				<meta
					name="description"
					content="I make things look neat with vector points, keyframes, and colorful
					monospace letters."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Good today.</Typography>
				<Typography variant="h2">
					I make things look neat with vector points, keyframes, and colorful
					monospace letters.
				</Typography>
			</div>
			<div className="content">
				<Typography variant="h2">Here's what's new:</Typography>
				<br />
				<Card variant="outlined">
					<CardContent>
						<Grid container>
							<Grid item xs={12} sm={8}>
								<Typography variant="subtitle1">19. Dec. 2021</Typography>
								<Typography variant="h2">
									Mintcraft version 1.4 released.
								</Typography>
								<Typography variant="body1">
									<strong>
										The new version of my resource pack now supports the 1.18
										Caves & Cliffs update.
									</strong>
									<br />
									It features new icons, a slightly updated color scheme, some
									tweaked icons (they move now), and a new add-on that changes
									the button click sound.
								</Typography>
								<br />
								<Link to="/projects/mintcraft">
									<Button variant="contained" color="warning">
										Tell me more
									</Button>
								</Link>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Image
									src={NewsMintcraft}
									width="100%"
									alt="Mintcraft "
									aspectRatio={16 / 9}
									color="transparent"
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
				<br />
				<Card variant="outlined">
					<CardContent>
						<Grid container>
							<Grid item xs={12} sm={8}>
								<Typography variant="subtitle1">19. Dec. 2021</Typography>
								<Typography variant="h2">
									This website got quite the upgrade.
								</Typography>
								<Typography variant="body1">
									If you have eyes, chances are you've already noticed that
									something was off. I migrated to version 5 of{" "}
									<a
										href="https://mui.com/"
										className="external"
										target="_blank"
										rel="noopener noreferrer"
									>
										MUI
									</a>{" "}
									(fka. Material-UI), which brought a variety of new features.
									While I was at it, I also took the time to further explore the
									capabilities of MUI, as well as restructuring this site.
									<br />
									Because of the quite substantial changes, there might still be
									some rough edges here and there. If you notice any, please get
									in touch with me.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Image
									src={NewsMuiFive}
									width="100%"
									alt="Ice cream at a crime scene."
									aspectRatio={16 / 9}
									color="transparent"
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
				<br />
			</div>
		</>
	);
}
export default Home;
