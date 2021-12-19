import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container, Alert } from "@mui/material";
import { RiInformationLine, RiMailLine, RiTwitterLine } from "react-icons/ri";

function Contact() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>pprmint.de – Contact.</title>
				<meta
					name="description"
					content="Click on buttons to send me an email or direct message on Twitter."
				/>
			</Helmet>
			<div className="title">
				<Typography variant="h1">Get in touch.</Typography>
				<Typography variant="h2">I don't bite. Not necessarily.</Typography>
			</div>
			<div className="content">
				<Alert
					severity="info"
					variant="filled"
					icon={<RiInformationLine />}
					action={
						<Link to="/faq">
							<Button size="small" color="inherit">
								Open FAQ
							</Button>
						</Link>
					}
				>
					Before you ask any questions, check whether the FAQ already anwers it.
				</Alert>
				<br />
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h2">Email.</Typography>
						<Typography variant="body1">
							The classic. If you don't have a Twitter account, or don't wanna
							get too personal with me, send me an email.
						</Typography>
						<br />
						<Button
							href="mailto:mail@pprmint.de?subject=I'll%20gladly%20ignore%20any%20ads%20or%20offers%20you%20might%20have%20for%20me."
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							startIcon={<RiMailLine />}
						>
							Send email
						</Button>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Typography variant="h2">Twitter.</Typography>
						<Typography variant="body1">
							Direct messages are open if you're up for a quick chat or have a
							general question.
						</Typography>
						<br />
						<Button
							href="https://twitter.com/messages/compose?recipient_id=1296863056266502144"
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							startIcon={<RiTwitterLine />}
						>
							Send a DM
						</Button>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default Contact;
