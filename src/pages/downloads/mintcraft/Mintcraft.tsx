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
  Divider,
} from "@material-ui/core";

import Image from "material-ui-image";

import {
  RiPaintFill,
  RiDownload2Line,
  RiFileList2Line,
  RiCheckboxCircleLine,
  RiGitMergeLine,
  RiFileZipLine,
  RiPaletteLine,
  RiDropLine,
  RiCloseCircleLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

import TitleScreen from "./images/title.png";
import OptionsScreen from "./images/options.png";
import SurvivalInventory from "./images/survival_inventory.png";
import SurvivalUnderwater from "./images/survival_underwater.png";
import CreativeSearch from "./images/creative_search.png";
import Beacon from "./images/beacon.png";
import Chest from "./images/mintbit_chest.png";

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
      <img className="header" src="/assets/blobs/mintcraft_header_blob.svg" />
      <Typography variant="h1" align="center">
        Mint&#173;craft.
      </Typography>

      <Container className="wrapper">
        <div className="content">
          <Typography variant="h2">Changes in version 1.3</Typography>
          <Typography variant="h3">Added:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiGitMergeLine />
              </ListItemIcon>
              <ListItemText>
                JSON files from Vanilla Tweaks to support many many MANY more
                languages to display text correctly.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiPaintFill />
              </ListItemIcon>
              <ListItemText>
                More custom colors, especially for the durability bar that
                appears below used tools.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiFileList2Line />
              </ListItemIcon>
              <ListItemText>
                A credits text document crediting third-party resources.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiFileZipLine />
              </ListItemIcon>
              <ListItemText>
                A custom font I made recently for the game that you can download
                separately below.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h3">Fixed:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiPaletteLine />
              </ListItemIcon>
              <ListItemText>
                Some inconsistent colors used for bars.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiDropLine />
              </ListItemIcon>
              <ListItemText>
                Red pixels around the text box for renaming items in an anvil.
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <br />
          <Typography variant="h2">Features of this pack</Typography>
          <Typography variant="h3">Different title screen music</Typography>
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
          <Typography variant="h3">Better round corners</Typography>
          <Typography variant="body1">
            The round corners in the default pack are a tiny bit inconsistent
            and buttons don’t have them at all. Guess what I did.
          </Typography>
          <br />
          <Typography variant="h3">Generally darker</Typography>
          <Typography variant="body1">
            Light-grey isn’t my cup of tea, so I made things dark-grey instead.
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h2">Screenshots</Typography>
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
          <Divider />
          <br />
          <Typography variant="h2">Dos and Don'ts</Typography>
          <Typography variant="h3" color="primary">
            Do:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiCheckboxCircleLine />
              </ListItemIcon>
              <ListItemText>
                Use and modify Mintcraft to your liking and for personal use.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiCheckboxCircleLine />
              </ListItemIcon>
              <ListItemText>
                Use this pack, the original or modified, in online videos,
                monetized or not.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiCheckboxCircleLine />
              </ListItemIcon>
              <ListItemText>
                Share this pack, or your modified version of it, with friends
                <i> privately</i>.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h3" color="error">
            Don't:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RiCloseCircleLine />
              </ListItemIcon>
              <ListItemText>
                Host, mirror, sell or otherwise publish versions, parts and/or
                modifications of Mintcraft
                <i> anywhere</i>.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiCloseCircleLine />
              </ListItemIcon>
              <ListItemText>
                Host, mirror, sell or otherwise publish versions, parts and/or
                modifications of Mintcraft
                <i> anyhow</i>.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RiCloseCircleLine />
              </ListItemIcon>
              <ListItemText>
                Host, mirror, sell or otherwise publish versions, parts and/or
                modifications of Mintcraft
                <i> anywhen</i>.
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <br />
          <Typography variant="h2">Add-ons</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <a href={Chest} target="_blank" rel="noopener noreferrer">
                <Image
                  src={Chest}
                  width="100%"
                  alt="Chest container with MintBit font applied."
                  aspectRatio={185 / 221}
                  color="transparent"
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h3">MintBit</Typography>
              <Typography variant="body1">
                A font that I specifically made to use alongside Mintcraft. Or
                well, in Minecraft in general. There's nothing stopping you from
                just using it with any other resource pack out there.
                <br />
                Simply apply this like you would any other resource pack.
                Provided you know how to do that.
              </Typography>
              <br />
              <Button
                href="/assets/downloads/MintBit_font.zip"
                variant="outlined"
                size="large"
                color="primary"
                startIcon={<RiDownload2Line />}
                style={{ marginRight: "10px" }}
              >
                Download
              </Button>
              <br />
              <br />
              <Divider />
              <br />
              <Typography variant="body2">And before you ask</Typography>
              <Typography variant="h3">
                How can I download the font itself?
              </Typography>
              <Typography variant="body1">
                As in OTF-font? Simply put: Not at all. At least not yet.
                <br />
                While I currently have a working font file sitting on my drive
                and while there is a "MintBit" page on this site, one is not
                quite ready for public release just yet and the other is a
                gigantic placeholder.
              </Typography>
              <Typography variant="body2" style={{ color: "#ffffff33" }}>
                That's to say, it's an exact copy of the MintSans page.
              </Typography>
              <Typography>
                So while I get both ready, I hope you can be a bit more patient
                and meanwhile enjoy using MintBit in Minecraft.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Typography variant="h2">How to install</Typography>
          <Typography variant="body1">
            If you haven't already,{" "}
            <a
              href="https://optifine.net/downloads"
              target="_blank"
              rel="noopener noreferrer"
            >
              install Optifine
            </a>{" "}
            before you start using this pack. After you downloaded this pack,
            paste it into your resource packs folder. You can open it from the
            game by clicking on [Options...], [Resource Packs...] and then [Open
            Pack Folder].
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h2">Credits</Typography>
          <a
            href="https://vanillatweaks.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="h3">
              Vanilla Tweaks
              <RiArrowRightUpLine
                style={{ fontSize: "28px", verticalAlign: "bottom" }}
              />
            </Typography>
          </a>
          <Typography variant="body1">
            JSON files to fix some text colors. Remember how I said this pack
            was only compatible with 3 languages? Yeah that was fixed with this.
          </Typography>
          <br />
          <a href="https://c418.org" target="_blank" rel="noopener noreferrer">
            <Typography variant="h3">
              C418
              <RiArrowRightUpLine
                style={{ fontSize: "28px", verticalAlign: "bottom" }}
              />
            </Typography>
          </a>
          <Typography variant="body1">
            Title screen music. And, well, most other songs in this game as
            well.
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h2">DOWNLOAD BUTTONS!!!</Typography>
          <Typography variant="body1">Click 'em. You earned it.</Typography>
          <br />
          <Button
            href="/assets/downloads/Mintcraft_1.3.zip"
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
