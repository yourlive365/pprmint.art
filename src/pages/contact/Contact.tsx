import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import {
  RiDiscordLine,
  RiMailLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";

function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Contact and social media.</title>
        <meta
          name="description"
          content="Click on buttons to get to my social media profiles, send me an email or join my Discord server. Yeah I have one of those as well, but seeing how often I mention it you wouldn't be surprised just how active it really is."
        />
      </Helmet>
      <img src="./assets/blobs/contact_header_blob.svg" style={{ position: "absolute", animation: "fadeTop 1s cubic-bezier(0, 0.7, 0.5, 1) .2s forwards", opacity: "0", }} />
      <Container id="wrapper">
      <Typography variant="h1" align="center">Contact & social media.</Typography>
      <div id="content">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Email.</Typography>
            <Typography variant="body1">
              The classic. Use this if you don't want to create an account on
              any of the social media platforms I'm using myself, or if it's
              something more formal you'd like to talk about. Keep in mind that
              I have a spam folder here as well.
            </Typography>
            <br />
            <a
              href="mailto:mail@pprmint.de?subject=I'll%20gladly%20ignore%20any%20ads%20or%20offers%20you%20might%20have%20for%20me."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" startIcon={<RiMailLine />}>
                Send mail
              </Button>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Twitter.</Typography>
            <Typography variant="body1">
              Direct messages are open if you're up for a quick chat or have a
              general question. On there I also like to occasionally post
              updates on my projects, if you're ever wondering why I'm not
              uploading much on YouTube for example.
            </Typography>
            <br />
            <a
              href="https://twitter.com/npprmint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" startIcon={<RiTwitterLine />}>
                Open profile
              </Button>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">YouTube.</Typography>
            <Typography variant="body1">
              Remember what I said about YouTube a jiffy ago? Well, this is
              where most of my animated works and videos end up, all striving to
              reach their destiny: Overtaking the Wii Disc Channel in views.
              There will be a party for sure.
            </Typography>
            <br />
            <a
              href="https://www.youtube.com/c/pprmint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" startIcon={<RiYoutubeLine />}>
                Open channel
              </Button>
            </a>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Discord.</Typography>
            <Typography variant="body1">
              The thing with my server is: I put so much effort into it, even
              created a custom sub domain redirecting to the invite link, yet I
              barely put any effort into bringing activity in there. So, if you
              like inactive servers, this is the place to go.
            </Typography>
            <br />
            <a
              href="https://discord.gg/Vw9JXwr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" startIcon={<RiDiscordLine />}>
                Join server
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
      </Container>
    </>
  );
}

export default Contact;
