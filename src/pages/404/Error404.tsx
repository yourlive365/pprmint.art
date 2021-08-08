import React from "react";
import { Helmet } from "react-helmet";
import { Button, Typography, Container } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";

function FourOhFour() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – Oḧ̶̪́ s̴̤̓h̵̺͘i̸̬̠̽͗ẗ̸̛͔́ ŏ̶̼̪͊́ḩ̶̹̮̦̥͙̔̋̌͐͘ f̷̰͎̺͚̦̈́̅̉͘͘ų̷̛̌͝c̷̱̪̜̋̉͗k̵̢̢̤̤͇̎̿̈́.̵̰̥̾̏̿̈́</title>
        <meta
          name="description"
          content="This page was not fo- wait hang on, you shouldn't be seeing this if you're on Google or something. "
        />
      </Helmet>
      <img className="header" src="./assets/blobs/404_header_blob.svg" />
      <Container className="wrapper">
        <Typography variant="h1" align="center">
          Nüscht hier.
        </Typography>
        <div className="content">
          <Typography variant="h2" align="center">
            This page wasn't found.
          </Typography>
          <br />
          <Typography variant="h3" align="center">
            Alas, thy efforts were for naught.
            <br />
            Thy hope of coming across a working page shan't be fulfilled.
            <br />
            Yet fear not, there is still hope!
          </Typography>
          <br />
          <Link to="/">
            <Button
              variant="outlined"
              size="large"
              style={{ display: "block", margin: "auto auto" }}
            >
              Hie back home!
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default FourOhFour;
