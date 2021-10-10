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
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RiBehanceLine, RiSoundcloudLine, RiYoutubeLine } from "react-icons/ri";
function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>pprmint.de – Good today.</title>
                <meta
                    name="description"
                    content="Good today and welcome."
                />
            </Helmet>
            <Container >
                <Typography variant="h1">Good today.</Typography>
                <Typography variant="h2">And welcome to my website.</Typography>
                <div className="content">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Card
                                className="primary"
                                style={{
                                    backgroundImage: "url(./assets/icons/discover.svg",
                                }}
                            >
                                <CardContent>
                                    <Link to="works">
                                        <Typography variant="h2" id="discover">
                                            Discover my works.
                                        </Typography>
                                    </Link>
                                    <Typography variant="body1" color="textSecondary">
                                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                    </Typography>
                                    <br />
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiBehanceLine style={{ color: "#1769ff" }} />}
                                        href="https://www.behance.net/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Behance
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiYoutubeLine style={{ color: "#ff0000" }} />}
                                        href="https://www.youtube.com/c/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={
                                            <RiSoundcloudLine style={{ color: "#ff8800" }} />
                                        }
                                        href="https://soundcloud.com/npprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SoundCloud
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link to="works">
                                <Typography variant="h2" id="discover">
                                    Download stuff I made.
                                </Typography>
                            </Link>
                            <Typography variant="body1" color="textSecondary">
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                            </Typography>
                            <br />
                            <Button
                                variant="outlined"
                                color="default"
                                startIcon={<RiBehanceLine style={{ color: "#1769ff" }} />}
                                href="https://www.behance.net/pprmint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Behance
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                startIcon={<RiYoutubeLine style={{ color: "#ff0000" }} />}
                                href="https://www.youtube.com/c/pprmint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                YouTube
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                startIcon={<RiSoundcloudLine style={{ color: "#ff8800" }} />}
                                href="https://soundcloud.com/npprmint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SoundCloud
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card
                                className="primary"
                                style={{
                                    backgroundImage: "url(./assets/icons/discover.svg",
                                }}
                            >
                                <CardContent>
                                    <Link to="works">
                                        <Typography variant="h2" id="discover">
                                            Discover my works.
                                        </Typography>
                                    </Link>
                                    <Typography variant="body1" color="textSecondary">
                                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                    </Typography>
                                    <br />
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiBehanceLine style={{ color: "#1769ff" }} />}
                                        href="https://www.behance.net/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Behance
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiYoutubeLine style={{ color: "#ff0000" }} />}
                                        href="https://www.youtube.com/c/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={
                                            <RiSoundcloudLine style={{ color: "#ff8800" }} />
                                        }
                                        href="https://soundcloud.com/npprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SoundCloud
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card
                                className="primary"
                                style={{
                                    backgroundImage: "url(./assets/icons/discover.svg",
                                }}
                            >
                                <CardContent>
                                    <Link to="works">
                                        <Typography variant="h2" id="discover">
                                            Discover my works.
                                        </Typography>
                                    </Link>
                                    <Typography variant="body1" color="textSecondary">
                                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                    </Typography>
                                    <br />
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiBehanceLine style={{ color: "#1769ff" }} />}
                                        href="https://www.behance.net/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Behance
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<RiYoutubeLine style={{ color: "#ff0000" }} />}
                                        href="https://www.youtube.com/c/pprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={
                                            <RiSoundcloudLine style={{ color: "#ff8800" }} />
                                        }
                                        href="https://soundcloud.com/npprmint"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SoundCloud
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}
export default Home;
