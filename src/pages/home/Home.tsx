import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import Image from "material-ui-image";

import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  RiPaintBrushLine,
  RiFileDownloadLine,
  RiMailLine,
  RiExternalLinkLine,
  RiQuestionnaireLine,
} from "react-icons/ri";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Good today.</title>
        <meta
          name="description"
          content="Good today and welcome to my online presence, or whatever one calls it. Here you're able to look at my works in full quality, download some things I created and get in touch with me."
        />
      </Helmet>
      <img
        src="./assets/blobs/main_header_blob.svg"
        style={{
          position: "absolute",
          animation: "fadeTop 1s cubic-bezier(0, 0.7, 0.5, 1) .2s forwards",
          opacity: "0",
        }}
      />
      <Container id="wrapper">
        <Typography variant="h1" align="center">
          Good today.
        </Typography>
        <div id="content">
          <Typography variant="h4" align="center">
            I move pixels around. Sometimes they look good.
          </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Link to="works">
                <Card
                  id="primary"
                  style={{
                    backgroundImage: "url(./assets/blobs/works_blob.svg",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      <RiPaintBrushLine
                        color="#3dd17f"
                        size="42px"
                        style={{ marginRight: "10px", verticalAlign: "bottom" }}
                      />
                      Works.
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Graphics, designs and music.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Link to="/downloads">
                <Card
                  id="primary"
                  style={{
                    backgroundImage: "url(./assets/blobs/downloads_blob.svg",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      <RiFileDownloadLine
                        color="#256eff"
                        size="42px"
                        style={{ marginRight: "10px", verticalAlign: "bottom" }}
                      />
                      Downloads.
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Things I made you can use somehow.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Link to="/faq">
                <Card
                  id="primary"
                  style={{
                    backgroundImage: "url(./assets/blobs/ko-fi_blob.svg",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      <RiQuestionnaireLine
                        color="#e63946"
                        size="42px"
                        style={{ marginRight: "10px", verticalAlign: "bottom" }}
                      />
                      FAQ.
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Questions I'm tired of answering.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Link to="/contact">
                <Card
                  id="primary"
                  style={{
                    backgroundImage: "url(./assets/blobs/contact_blob.svg",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      <RiMailLine
                        color="#f9c80e"
                        size="42px"
                        style={{ marginRight: "10px", verticalAlign: "bottom" }}
                      />
                      Contact.
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Email, social media and my Discord server.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Home;
