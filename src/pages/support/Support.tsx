import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import {
  RiDiscordLine,
  RiMailLine,
  RiCupLine,
  RiYoutubeLine,
} from "react-icons/ri";

function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Support.</title>
        <meta
          name="description"
          content="Ways to support me, financially and not."
        />
      </Helmet>
      <Typography variant="h1" align="center">Support.</Typography>
      <Container id="wrapper">
        <div id="content">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Method 1: Feedback.</Typography>
              <Typography variant="body1">
                What I mean by that is just rating my videos on YouTube, writing
                comments about what's great and what's not, telling me how to
                improve things. All of these are simple ways to help me do
                better and to stay motivated. It costs nothing more than a few
                seconds or minutes of your life.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Method 2: Ko-fi.</Typography>
              <Typography variant="body1">
                You will not only get my eternal gratitude, but also some bonus
                content, like videos showing how some of my works came to be and
                maybe even some of my project files. That money will be spent on
                new gear, as well as assets and plugins to make my life easier.
                <br />I want to stress though that{" "}
                <b>you will never need to send me any money</b>. My works will
                never be behind a paywall and you shouldn't ever feel obligated
                to send me anything. Only do it if you want to and can afford
                it.
              </Typography>
              <br />
              <a
                href="https://ko-fi.com/pprmint"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" startIcon={<RiCupLine />}>
                  Visit Ko-fi page
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
