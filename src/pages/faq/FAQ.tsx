import React from "react";
import { Helmet } from "react-helmet";
import { Link, Typography, Grid, Container, Divider } from "@material-ui/core";

interface QAProps {
  question: string;
  answer: string;
}
interface QAwithQuoteProps {
  question: string;
  answer: string;
  quote: string;
}

function QA(props: QAProps) {
  return (
    <div>
      <Typography variant="h5">
        <span style={{ fontSize: "36px", color: "#e63846", lineHeight: "0" }}>
          Q:{" "}
        </span>
        {props.question}
      </Typography>
      <br />
      <Typography variant="body1">
        <span
          style={{
            fontSize: "36px",
            color: "#3dd17f",
            fontFamily: "Podkova",
            fontWeight: "bold",
            lineHeight: "0",
          }}
        >
          A:{" "}
        </span>
        {props.answer}
      </Typography>
      <br />
      <Divider />
      <br />
    </div>
  );
}
function QAwithQuote(props: QAwithQuoteProps) {
  return (
    <div>
      <Typography variant="h5">
        <span style={{ fontSize: "36px", color: "#e63846", lineHeight: "0" }}>
          Q:{" "}
        </span>
        {props.question}
      </Typography>
      <br />
      <Typography variant="body1">
        <span
          style={{
            fontSize: "36px",
            color: "#3dd17f",
            fontFamily: "Podkova",
            fontWeight: "bold",
            lineHeight: "0",
          }}
        >
          A:{" "}
        </span>
        {props.answer}
        <div
          style={{
            borderLeft: "2px solid #3dd17f",
            paddingLeft: "10px",
            marginTop: "10px",
          }}
        >
          <Typography style={{ fontStyle: "italic", color: "white" }}>
            {props.quote}
          </Typography>
        </div>
      </Typography>
      <br />
      <Divider />
      <br />
    </div>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pprmint.de – FAQ.</title>
        <meta
          name="description"
          content="Have a look here before you send me a message with your question."
        />
      </Helmet>
      <img
        src="./assets/blobs/faq_header_blob.svg"
        style={{
          position: "absolute",
          animation: "fadeTop 1s cubic-bezier(0, 0.7, 0.5, 1) .2s forwards",
          opacity: "0",
        }}
      />
      <Container id="wrapper">
        <Typography variant="h1" align="center">
          FAQ.
        </Typography>
        <div id="content">
          <QA
            question="Who are you?"
            answer="My name is Nicklas, but you can (and should) just call me Nick. I'm a 17 years old dude from Germany and spend my spare time with design, anime and photography."
          />
          <QA
            question="Can you make a (thing here) for me?"
            answer="Most likely not. Generally speaking, I don't work for others, unless it's for people I know well enough for me to consider them so-called friends. There are several reasons why I won't work for strangers for the time being. One of which is the lack of a proper payment method that I could offer."
          />
          <QAwithQuote
            question="May I use any of your works in my own project?"
            answer="This is the question that I've been asked the most. (Like 3 times. lol) In short: No. In long:"
            quote="My [works] are not meant to be featured in anything or redistributed anywhere outside of my YouTube channel and my website, since this is all basically just my hobby; what I like to do in my spare time. [...] While that might change in the future (stress is on *might*), this is all my works really are in the present day [...]."
          />
          <QA
            question="What software do you use?"
            answer="I mainly use Serif Affinity Designer and Adobe After Effects for most of my creations. Audio recording and editing is done in Audition and video editing in Premiere Pro."
          />
          <QA
            question="Why did you forget the GameCube disc?"
            answer="I forgot the original Wii had that backwards compatibility, since I had only used a Wii U in recent years."
          />
          <QA
            question="Is there a way for me to support you?"
            answer="Giving feedback to my works is one way, buying me a hot brew on my Ko-fi profile is another. Check out the Support page for more info."
          />
        </div>
      </Container>
    </>
  );
}

export default About;
