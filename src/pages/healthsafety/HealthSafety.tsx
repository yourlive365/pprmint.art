import React from "react";
import { Helmet } from "react-helmet";
import { Link, Typography, Container } from "@mui/material";
import Image from "material-ui-image";

import Popup from "./popup.png";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          pprmint.de – Refer to the Wii manual for more information.
        </title>
        <meta
          name="description"
          content="This shouldn't be on Google, actually. Or DuckDuckGo. Or Bing. Or whatever search engine you might be using right now."
        />
      </Helmet>
      <Container id="wrapper">
        <div id="content" style={{marginTop: "75px"}}>
          <Image
            src={Popup}
            alt=""
            aspectRatio={1277/911}
            color="transparent"
          />
        </div>
      </Container>
    </>
  );
}

export default About;
