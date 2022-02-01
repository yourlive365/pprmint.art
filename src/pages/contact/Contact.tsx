import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Button,
	Typography,
	Alert,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Card,
} from "@mui/material";
import {
	RiInformationLine,
	RiMailLine,
	RiTwitterLine,
	RiArrowDownSLine,
	RiNumber1,
	RiNumber2,
	RiNumber3,
} from "react-icons/ri";

function createData(
	name: string,
	personal: string,
	commercial: string,
	modify: string,
	sell: string,
	note: number
) {
	return { name, personal, commercial, modify, sell, note };
}

const rows = [
	createData("Motion graphics and other videos", "✕", "✕", "✕", "✕", 1),
	createData("Illustrations and other static images", "✕", "✕", "✕", "✕", 1),
	createData("Desktop and phone wallpapers", "✓", "✕", "✓", "✕", 2),
	createData("Other projects", "✓", "✕", "✓", "✕", 2),
	createData("Fonts", "✓", "✓", "✓", "✕", 3),
];

function Contact() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Get in touch • pprmint.art</title>
				<meta
					name="description"
					content="Learn more about what software I use to make my thingies, how you may use some of the things I make and click spicy buttons to send me an email or DM on Twitter."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Get in touch.</Typography>
				<Typography variant="h2">I don't bite. Not necessarily.</Typography>
			</div>
			<div className="content">
				<div>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">
								Can you make a (thing here) for me?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								<strong>Most likely not.</strong> Generally speaking, I don't
								work for others, unless it's for people I know well enough for
								me to consider them so-called friends. There are several reasons
								why I won't work for strangers for the time being, one of which
								is the lack of a proper payment method that I could accept.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">
								What are the terms of use for your creations?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Alert color="info" variant="filled" icon={<RiInformationLine />}>
								If these terms are unclear to you in any way, don't hesitate to
								get in touch with me.
							</Alert>
							<Typography variant="body1">
								<br />
								<Card variant="outlined">
									<TableContainer>
										<Table>
											<TableHead sx={{ backgroundColor: "#333" }}>
												<TableRow>
													<TableCell>Thingy</TableCell>
													<TableCell align="right">Personal use</TableCell>
													<TableCell align="right">Commercial use</TableCell>
													<TableCell align="right">Modify</TableCell>
													<TableCell align="right">Sell</TableCell>
													<TableCell align="right">Details</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{rows.map((row) => (
													<TableRow
														key={row.name}
														sx={{
															"&:last-child td, &:last-child th": { border: 0 },
															"&:nth-of-type(odd)": {
																backgroundColor: "#111",
															},
														}}
													>
														<TableCell component="th" scope="row">
															{row.name}
														</TableCell>
														<TableCell align="right">{row.personal}</TableCell>
														<TableCell align="right">
															{row.commercial}
														</TableCell>
														<TableCell align="right">{row.modify}</TableCell>
														<TableCell align="right">{row.sell}</TableCell>
														<TableCell align="right">{row.note}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Card>
								<br />
								<List>
									<ListItem>
										<ListItemIcon>
											<RiNumber1 />
										</ListItemIcon>
										<ListItemText>
											For these kinds of works, I'd rather you simply focus your
											senses on them and just look at them. Think of my website
											and YouTube channel as my little art gallery where you can
											have a look at my works. No buy, no rent, no nothing. Only
											look.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiNumber2 />
										</ListItemIcon>
										<ListItemText>
											Contrary to how it is the case with most of my
											illustrations and animations, I actually encourage you to
											download and use projects like{" "}
											<Link to="/projects/mintcraft">Mintcraft</Link> and my{" "}
											<Link to="/projects/win10tiles">Windows 10 tiles</Link> as
											well as my occasional desktop backgrounds for yourself.
											You are also free to make your own changes and share them{" "}
											<i>privately</i> with your friends.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<RiNumber3 />
										</ListItemIcon>
										<ListItemText>
											My fonts are licensed under the{" "}
											<a
												className="external"
												href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL"
												target="_blank"
												rel="noopener noreferrer"
											>
												SIL Open Font License
											</a>
											. This means that you may freely use the fonts for
											personal and commercial projects. However, you may not
											sell the fonts and/or derivatives thereof.
										</ListItemText>
									</ListItem>
								</List>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">What software do you use?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								Design:{" "}
								<a
									className="external"
									href="https://affinity.serif.com/designer/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Affinity Designer
								</a>
								and{" "}
								<a
									className="external"
									href="https://affinity.serif.com/photo/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Photo
								</a>
								<br />
								Motion graphics:{" "}
								<a
									className="external"
									href="https://www.adobe.com/products/aftereffects.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									Adobe After Effects
								</a>
								with the extensions{" "}
								<a
									className="external"
									href="https://www.mtmograph.com/products/motion-3"
									target="_blank"
									rel="noopener noreferrer"
								>
									Motion
								</a>
								,{" "}
								<a
									className="external"
									href="https://www.mtmograph.com/products/boombox"
									target="_blank"
									rel="noopener noreferrer"
								>
									Boombox
								</a>
								and{" "}
								<a
									className="external"
									href="https://aescripts.com/ease-and-wizz/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Ease and Wizz
								</a>
								<br />
								Video editing:{" "}
								<a
									className="external"
									href="https://www.adobe.com/products/premiere.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									Adobe Premiere Pro
								</a>
								<br />
								Audio recording and editing:{" "}
								<a
									className="external"
									href="https://www.adobe.com/products/audition.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									Adobe Audition
								</a>
								<br />
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">
								Why did you forget the GameCube disc?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								<strong>
									I forgot the original Wii had that backwards compatibility
								</strong>
								, since I had only used a Wii U in recent years. Make of that
								what you will.
								<br />
								If you don't know what this question is about, have a look at
								the comments below{" "}
								<a
									className="external"
									href="https://www.youtube.com/watch?v=iEw9ZqHatPI"
									target="_blank"
									rel="noopener noreferrer"
								>
									this video
								</a>
								.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">
								Is there a way for me to support you?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								<strong>Kind words go a long way.</strong> If you think they
								would be interested in what I make as well, you could also tell
								your friends about me. If there's ever growing demand to support
								me financially as well, I might reconsider opening a Patreon or
								Ko-fi.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion variant="outlined">
						<AccordionSummary expandIcon={<RiArrowDownSLine />}>
							<Typography variant="h3">
								Are any of these questions actually "frequently asked"?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">Nah.</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<br />
				<Typography variant="h2">Is something still unclear?</Typography>
				<Typography variant="body1">
					If your question wasn't answered here, feel free to get in touch with
					me. Maybe it'll end up on this page as well.
				</Typography>
				<br />
				<Button
					href="mailto:mail@pprmint.art?subject=I'll%20gladly%20ignore%20any%20ads%20or%20offers%20you%20might%20have%20for%20me."
					target="_blank"
					rel="noopener noreferrer"
					variant="contained"
					startIcon={<RiMailLine />}
					sx={{ marginRight: "10px" }}
				>
					Send email
				</Button>
				<Button
					href="https://twitter.com/messages/compose?recipient_id=1296863056266502144"
					target="_blank"
					rel="noopener noreferrer"
					variant="contained"
					color="info"
					startIcon={<RiTwitterLine />}
				>
					Send Twitter DM
				</Button>
			</div>
		</>
	);
}

export default Contact;
