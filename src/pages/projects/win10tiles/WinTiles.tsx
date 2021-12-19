import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Grid, Container } from "@mui/material";
import Image from "material-ui-image";

import { RiDownload2Line } from "react-icons/ri";

import AfterEffects from "./images/After_Effects.png";
import Aseprite from "./images/Aseprite.png";
import Audition from "./images/Audition.png";
import Blender from "./images/Blender.png";
import Bundled from "./images/Bundled.png";
import Cinema4D from "./images/Cinema_4D.png";
import Code from "./images/Code.png";
import Designer from "./images/Designer.png";
import Discord from "./images/Discord.png";
import Dolphin from "./images/Dolphin.png";
import Excel from "./images/Excel.png";
import FlStudio from "./images/FL_Studio.png";
import Live from "./images/Live.png";
import MediaEncoder from "./images/Media_Encoder.png";
import MinecraftBedrock from "./images/Minecraft_Bedrock.png";
import MinecraftJava from "./images/Minecraft_Java.png";
import Netflix from "./images/Netflix.png";
import Obs from "./images/OBS.png";
import Osu from "./images/osu.png";
import Pcsx2 from "./images/PCSX2.png";
import Photo from "./images/Photo.png";
import PowerPoint from "./images/PowerPoint.png";
import Premiere from "./images/Premiere.png";
import PrimeVideo from "./images/Prime_Video.png";
import ProtonMail from "./images/ProtonMail.png";
import Publisher from "./images/Publisher.png";
import QBittorrent from "./images/qBittorrent.png";
import Spotify from "./images/Spotify.png";
import Steam from "./images/Steam.png";
import Telegram from "./images/Telegram.png";
import Vmware from "./images/Vmware.png";
import WhatsApp from "./images/WhatsApp.png";
import Word from "./images/Word.png";

interface TileImageProps {
  image: string;
}

function TileImage(props: TileImageProps) {
  return (
    <Grid item xs={4} sm={1} style={{ padding: "2.5px" }}>
      <Image
        src={props.image}
        width="100%"
        color="#121212"
        alt=""
      />
    </Grid>
  );
}

function WinTilesDL() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Windows 10 Tiles.</title>
        <meta
          name="description"
          content="Make your start menu pretty (maybe) by using these in yours. Best if you're running version 20H2 or later."
        />
      </Helmet>
      <Container className="wrapper">
        <Typography variant="h1" align="center">
          Windows 10 Tiles.
        </Typography>
        <div className="content">
          <Grid container>
            <TileImage image={AfterEffects} />
            <TileImage image={Audition} />
            <TileImage image={MediaEncoder} />
            <TileImage image={Premiere} />
            <TileImage image={Designer} />
            <TileImage image={Photo} />
            <TileImage image={Publisher} />
            <TileImage image={Aseprite} />
            <TileImage image={Blender} />
            <TileImage image={Bundled} />
            <TileImage image={Cinema4D} />
            <TileImage image={Code} />
            <TileImage image={Discord} />
            <TileImage image={Dolphin} />
            <TileImage image={FlStudio} />
            <TileImage image={Live} />
            <TileImage image={Word} />
            <TileImage image={Excel} />
            <TileImage image={PowerPoint} />
            <TileImage image={MinecraftJava} />
            <TileImage image={MinecraftBedrock} />
            <TileImage image={Netflix} />
            <TileImage image={Obs} />
            <TileImage image={Osu} />
            <TileImage image={Pcsx2} />
            <TileImage image={PrimeVideo} />
            <TileImage image={ProtonMail} />
            <TileImage image={Spotify} />
            <TileImage image={Steam} />
            <TileImage image={Telegram} />
            <TileImage image={Vmware} />
            <TileImage image={WhatsApp} />
            <TileImage image={QBittorrent} />
          </Grid>
          <br />
          <Typography variant="body1">
            To use these you'll need something like{" "}
            <a
              href="http://github.com/Jonno12345/TileIconifier"
              target="_blank"
              rel="noopener noreferrer"
            >
              TileIconifier
            </a>
            .
          </Typography>
          <br />
          <Button
            href="/assets/downloads/win10tiles.zip"
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<RiDownload2Line />}
          >
            Download
          </Button>
        </div>
      </Container>
    </>
  );
}

export default WinTilesDL;
