import type { NextPage } from "next";
import Head from "next/head";
import { Button, Card, Container } from "react-bootstrap";

export type StorageData = { userId: string; currentLeaderboard?: string };

const Home: NextPage = () => {
  return (
    <div className="bg-primary min-vh-100 max-vw-100 d-flex flex-column">
      <Head>
        <title>Jigme's Birthday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="py-6 flex-grow-1 d-flex justify-content-center align-items-center flex-column">
        <h1 className="col-12 display-2 text-white text-center">
          It's Jigme's Birthday 🥳
        </h1>

        <h2 className="col-12 display-4 text-white text-center ">
          Help give her the gift of{" "}
          <span className="text-danger">memories</span>{" "}
          <small>#justbrokethings</small>
        </h2>

        <div className="d-none d-md-block">
          <div className="d-flex flex-row">
            <Gifts />
          </div>
        </div>

        <div className="d-block d-md-none">
          <div className="d-flex flex-column">
            <Gifts />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

const Gifts = () => {
  return (
    <>
      <Card className="mx-3" style={{ height: 300 }}>
        <Card.Body>
          <h3>Crowd-sourced Spotify Playlist</h3>

          <p>
            Toss in a song that reminds you of a memory with Jigme. She can use
            this playlist to wake up, in the shower, crying at night, or on your
            next road trip
          </p>

          <small>
            Asking you contribute at least <strong>1 song</strong>
          </small>
        </Card.Body>

        <Card.Footer>
          <Button
            className="w-100"
            variant="success"
            href="https://spotify.com"
            target="_blank"
          >
            Go to playlist
          </Button>
        </Card.Footer>
      </Card>

      <Card className="mx-3" style={{ height: 300 }}>
        <Card.Body>
          <h3>Group Drive</h3>

          <p>
            Remember that thing that you did with Jigme? Well, make sure she
            never forgets by adding in photos & videos into this drive.
          </p>

          <small>
            Asking you contribute at least <strong>1 photo or video</strong>
          </small>
        </Card.Body>

        <Card.Footer>
          <Button
            className="w-100"
            variant="warning"
            href="https://drive.google.com"
            target="_blank"
          >
            Go to Drive
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
