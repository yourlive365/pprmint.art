import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from "material-ui-image";

import MintSansPreview from "./images/MintSans.svg";
import MintAltPreview from "./images/MintAlt.svg";
import MintcraftPreview from "./images/Mintcraft.svg";
import WinTilesPreview from "./images/Win10Tiles.svg";

import { RiDownload2Line } from "react-icons/ri";

interface DownloadCardProps {
  title: string;
  image: string;
  description: string;
  download: string;
  link: string;
}

function DownloadCard(props: DownloadCardProps) {
  return (
    <div className="DownloadCard">
      <Link to={props.link}>
        <Image
          src={props.image}
          width="100%"
          imageStyle={{ borderRadius: "8px", border: "1px solid #ffffff00", transition: "all 0.2s cubic-bezier(0, 0.7, 0.5, 1)", cursor: "pointer", }}
          alt=""
          color="transparent"
          aspectRatio={16 / 9}
        />
      </Link>
      <br />
      <div className="left">
        <Link to={props.link}>
          <Typography variant="h2">
            {props.title}
            <Typography variant="body1" color="textSecondary">
              {props.description}
            </Typography>
          </Typography>
        </Link>
      </div>
      <div className="right">
        <Link to={props.link}>
          <Button color="default">Read more</Button>
        </Link>
        <Button
          color="primary"
          endIcon={<RiDownload2Line />}
          href={props.download}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

function Downloads() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Downloads.</title>
        <meta
          name="description"
          content="Download things I made, like fonts, my Minecraft ressource pack or my Windows 10 start menu tiles. Free of charge, of course. Can't use PayPal yet, so..."
        />
      </Helmet>
      <img className="header" src="./assets/blobs/downloads_header_blob.svg" />
      <Typography variant="h1" align="center">
        Down&#173;loads.
      </Typography>
      <Container className="wrapper">
        <div className="content">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <DownloadCard
                title="Mintcraft"
                image={MintcraftPreview}
                description="Dark resource pack for Minecraft."
                download="/assets/downloads/Mintcraft_1.2.zip"
                link="/downloads/mintcraft"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DownloadCard
                title="MintSans"
                image={MintSansPreview}
                description="My first geometric font."
                download="/assets/downloads/mintsans_2.0.zip"
                link="/downloads/mintsans"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DownloadCard
                title="MintAlternative"
                image={MintAltPreview}
                description="A font inspired by some Material icons."
                download="/assets/downloads/mintalternative_1.1.zip"
                link="/downloads/mintalt"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DownloadCard
                title="Windows 10 Tiles"
                image={WinTilesPreview}
                description="Custom tiles I made for my start menu."
                download="/assets/downloads/win10tiles.zip"
                link="/downloads/win10tiles"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Downloads;
