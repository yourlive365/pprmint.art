import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
} from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";

function About() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – FAQ.</title>
				<meta
					name="description"
					content="Have a look here before you send me a message with your question."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">FAQ.</Typography>
				<Typography variant="h2">
					Answering your questions before you can ask them.
				</Typography>
			</div>
			<div className="content">
				<Accordion variant="outlined">
					<AccordionSummary expandIcon={<RiArrowDownSLine />}>
						<Typography variant="h3">
							Can you make a (thing here) for me?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body1">
							<strong>Most likely not.</strong> Generally speaking, I don't work
							for others, unless it's for people I know well enough for me to
							consider them so-called friends. There are several reasons why I
							won't work for strangers for the time being, one of which is the
							lack of a proper payment method that I could accept.
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
						<Typography variant="body1">
							<strong>
								I reserve all rights to the graphics, designs and animations I
								create
							</strong>
							, unless specified otherwise. They may only be used, presented or
							redistributed by me and only on my website, social media, etc.
							<br />
							My fonts are licensed under the{" "}
							<a
								className="external"
								href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL"
								target="_blank"
								rel="noopener noreferrer"
							>
								SIL Open Font License
							</a>
							, which means they're free to use for personal and commercial use.
							<br />
							Other projects that can be acquired by pressing a green button
							saying "DOWNLOAD" with an arrow next to it, are free for
							non-commercial use, and may not be sold or redistributed
							individually by anyone other than me, unless specified otherwise.
							<br />
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
							, since I had only used a Wii U in recent years. Make of that what
							you will.
							<br />
							If you don't know what this question is about, have a look at the
							comments below{" "}
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
							<strong>Kind words go a long way.</strong> If you think they would
							be interested in what I make as well, you could also tell your
							friends about me. If there's ever growing demand to support me
							financially as well, I might reconsider opening a Patreon or
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
				<br />
				<Typography variant="h2">Is something still unclear?</Typography>
				<Typography variant="body1">
					If your question wasn't answered here, feel free to get in touch with
					me. Maybe it'll end up on this page as well.
				</Typography>
				<br />
				<Link to="/contact">
					<Button variant="contained" size="large">
						Contact me
					</Button>
				</Link>
			</div>
		</>
	);
}

export default About;
