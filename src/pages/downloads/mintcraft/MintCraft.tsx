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
  RiSkipForwardLine,
  RiHammerLine,
  RiRefreshLine,
  RiDownload2Line,
} from "react-icons/ri";

import TitleScreen from "./images/title.png";
import OptionsScreen from "./images/options_controls.png";
import SurvivalInventory from "./images/survival_inventory.png";
import SurvivalFurnace from "./images/survival_furnace.png";
import CreativeInventory from "./images/creative_inventory.png";
import CreativeSearch from "./images/creative_search.png";

function MintCraftDL() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Mintcraft.</title>
        <meta
          name="description"
          content="Mintcraft (formerly 'MintCraft') is my Minecraft resource pack with some UI tweaks to my liking."
        />
      </Helmet>
      <Typography variant="h1" align="center">
        Mint&#173;craft.
        {/* <span style={{ position: "absolute", color: "#f9c80e", fontFamily: "DM Sans", fontWeight: "bold", fontSize: "30px", transform: "rotate(-10deg)", animation: "splash .25s ease-out infinite alternate" }}>
          This is Sample Text.
        </span> */}
      </Typography>

      <Container id="wrapper">
        <div id="content">
          <Typography variant="h4">Changes in version 1.01</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiAddLine />
              </ListItemIcon>
              <ListItemText>
                Added some more splash texts. Because that’s barely even worth
                an entire new version, here are the changes for the previous
                version as well.
              </ListItemText>
            </ListItem>
          </List>
          <br />
          <Typography variant="h5">Changes in version 1.0</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiSkipForwardLine />
              </ListItemIcon>
              <ListItemText>
                Skipped 0.8 and 0.9 in favor of just not caring about whether
                this thing is even ““““““finalized”””””.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiRefreshLine />
              </ListItemIcon>
              <ListItemText>
                Replaced title screen logo with a debatably superior one.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiHammerLine />
              </ListItemIcon>
              <ListItemText>Some small fixes here and there.</ListItemText>
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
                href={SurvivalFurnace}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={SurvivalFurnace}
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
                href={CreativeInventory}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={CreativeInventory}
                  width="100%"
                  alt="Creative inventory."
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
                  alt="Creative inventory search."
                  imageStyle={{ borderRadius: "8px" }}
                  aspectRatio={16 / 9}
                  color="transparent"
                />
              </a>
            </Grid>
          </Grid>
          <br />
          <Typography variant="h4">Before downloading…</Typography>
          <Typography variant="body1">
            Some few things require you to have{" "}
            <a
              href="https://optifine.net/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Optifine
            </a>{" "}
            installed, like a proper loading screen when starting the game, and
            that you play in either German (Germany), English (US) or English
            (United Kingdom). Otherwise some texts might be hard to read.
            <br />
            Feedback can be provided through my social media or via email and is
            really appreciated.
            <br />
            And if you happen to care: I play this game along with{" "}
            <a
              href="https://www.curseforge.com/minecraft/texture-packs/nates-tweaks"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Nate's Tweaks
            </a>{" "}
            and{" "}
            <a
              href="https://www.bitslablab.com/bslshaders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BSL Shaders
            </a>
            .
          </Typography>
          <br />
          <Button
            href="/assets/downloads/Mintcraft_1.01.zip"
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<RiDownload2Line />}
          >
            Download for 1.16.2+
          </Button>
        </div>
      </Container>
    </>
  );
}

export default MintCraftDL;
