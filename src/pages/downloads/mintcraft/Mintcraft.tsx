import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";

import Image from "material-ui-image";

import {
  RiAddLine,
  RiPaintFill,
  RiDownload2Line,
  RiInstallLine,
  RiFileTextLine,
  RiContrastLine,
  RiGithubLine,
} from "react-icons/ri";

import TitleScreen from "./images/title.png";
import OptionsScreen from "./images/options.png";
import SurvivalInventory from "./images/survival_inventory.png";
import SurvivalUnderwater from "./images/survival_underwater.png";
import CreativeSearch from "./images/creative_search.png";
import Beacon from "./images/beacon.png";

function MintcraftDL() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Mintcraft.</title>
        <meta
          name="description"
          content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking. Craft."
        />
      </Helmet>
      <img
        src="/assets/blobs/mintcraft_header_blob.svg"
        style={{
          position: "absolute",
          animation: "fadeTop 1s cubic-bezier(0, 0.7, 0.5, 1) .2s forwards",
          opacity: "0",
        }}
      />
      <Typography variant="h1" align="center">
        Mint&#173;craft.
      </Typography>

      <Container id="wrapper">
        <div id="content">
          <Typography variant="h4">Changes in version 1.2</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiAddLine />
              </ListItemIcon>
              <ListItemText>
                Now supports version 1.17 and above. I hope.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiPaintFill />
              </ListItemIcon>
              <ListItemText>
                Changed design of buttons, containers and icons.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiFileTextLine />
              </ListItemIcon>
              <ListItemText>
                Added even more splash texts and exclamation marks, featuring
                quotes from{" "}
                <a
                  href="https://twitter.com/Gamer_Kold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kold
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/ScreamRepeat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ScreamRepeat
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/notkoutsie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Koutsie
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/Voluna_Awoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voluna
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/TaromaruYuki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taromaru
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/emplexx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emplexx
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/foxylucklol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FoxyLuck
                </a>
                !
              </ListItemText>
            </ListItem>
          </List>
          <br />
          <br />
          <Typography variant="h4">Features of this pack</Typography>
          <Typography variant="h5">Different title screen music</Typography>
          <Typography variant="body1">
            I replaced the tracks playing behind the main menu with other songs
            by C418, namely{" "}
            <a
              href="https://c418.bandcamp.com/track/dead-voxel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dead Voxel
            </a>
            ,{" "}
            <a
              href="https://c418.bandcamp.com/track/atempause"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atempause
            </a>
            ,{" "}
            <a
              href="https://c418.bandcamp.com/track/keighley"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keighley
            </a>{" "}
            and{" "}
            <a
              href="https://c418.bandcamp.com/track/another-weird-ambient-tune"
              target="_blank"
              rel="noopener noreferrer"
            >
              Another weird ambient tune.
            </a>
          </Typography>
          <br />
          <Typography variant="h5">Better round corners</Typography>
          <Typography variant="body1">
            The round corners in the default pack are a tiny bit inconsistent
            and buttons don’t have them at all. Guess what I did.
          </Typography>
          <br />
          <Typography variant="h5">Generally darker</Typography>
          <Typography variant="body1">
            Light-grey isn’t my cup of tea, so I made things dark-grey instead.
          </Typography>
          <br />
          <br />
          <Typography variant="h4">Screenshots</Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <a href={TitleScreen} target="_blank" rel="noopener noreferrer">
                <Image
                  src={TitleScreen}
                  width="100%"
                  alt="Title screen."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href={OptionsScreen} target="_blank" rel="noopener noreferrer">
                <Image
                  src={OptionsScreen}
                  width="100%"
                  alt="Options screen."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href={SurvivalInventory}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={SurvivalInventory}
                  width="100%"
                  alt="Survival inventory."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href={SurvivalUnderwater}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={SurvivalUnderwater}
                  width="100%"
                  alt="Survival furnace window."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a
                href={CreativeSearch}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={CreativeSearch}
                  width="100%"
                  alt="Creative inventory."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href={Beacon} target="_blank" rel="noopener noreferrer">
                <Image
                  src={Beacon}
                  width="100%"
                  alt="Creative inventory search."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
          </Grid>
          <br />
          <Typography variant="h4">Prerequisites</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiInstallLine />
              </ListItemIcon>
              <ListItemText>
                If you haven't already,{" "}
                <a
                  href="https://optifine.net/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  install Optifine
                </a>{" "}
                for the best experience with this pack.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiContrastLine />
              </ListItemIcon>
              <ListItemText>
                As of now, text display errors occur when playing in languages
                other than German (Germany), English (UK) or English (US).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiGithubLine />
              </ListItemIcon>
              <ListItemText>
                For info on what you may do with this resource pack and how you
                can contribute, check out the{" "}
                <a
                  href="https://github.com/pprmint/mintcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository
                </a>
                .
              </ListItemText>
            </ListItem>
          </List>
          <br />
          <Button
            href="/assets/downloads/Mintcraft_1.2.zip"
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<RiDownload2Line />}
            style={{ marginRight: "10px" }}
          >
            Download for 1.17
          </Button>
          <Button
            href="/assets/downloads/Mintcraft_1.1.zip"
            variant="text"
            size="large"
            color="primary"
          >
            Download for 1.16
          </Button>
        </div>
      </Container>
    </>
  );
}

export default MintcraftDL;
