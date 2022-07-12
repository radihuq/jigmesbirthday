import type { NextPage } from "next";
import Head from "next/head";
import { Button, Card, Container } from "react-bootstrap";

export type StorageData = { userId: string; currentLeaderboard?: string };

const Home: NextPage = () => {
  return (
    <div className="bg-primary min-vh-100 max-vw-100 d-flex flex-column">
      <Head>
        <title>Jigme&apos;s Birthday</title>
        <link rel="icon" href="/favicon.ico" />

        <style>
          background: #CF371F; background: linear-gradient(to right, #CF371F 0%,
          #CD8FCF 100%); -webkit-background-clip: text; -webkit-text-fill-color:
          transparent;
        </style>
      </Head>

      <Container className="py-6 flex-grow-1 d-flex justify-content-center align-items-center flex-column">
        <h1 className="col-12 display-2 text-white text-center">
          It&apos;s Jigme&apos;s Birthday 🥳
        </h1>

        <h2 className="col-12 display-4 text-white text-center ">
          Help give her the gift of{" "}
          <span
            style={{
              background: "linear-gradient(to right, #F0932B 0%, #f6e58d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            memories
          </span>{" "}
          <small>#justbrokethings</small>
        </h2>

        <div className="d-none d-md-block">
          <div className="d-flex flex-row">
            <Gifts addPadding={true} />
          </div>
        </div>

        <div className="d-block d-md-none">
          <div className="d-flex flex-column">
            <Gifts addPadding={false} />
          </div>
        </div>
      </Container>

      <div>
        <p className="text-white text-center">
          Made with ♥ by Jigme&apos;s friends
        </p>
      </div>
    </div>
  );
};

export default Home;

const Gifts = ({ addPadding }: { addPadding: boolean }) => {
  return (
    <>
      <Card className="w-100" style={{ height: 300 }}>
        <Card.Body>
          <h3>Curated Spotify Playlist</h3>

          <p>
            Toss in a song that reminds you of a memory with Jigme. In the end
            she can use this playlist to help wake up, to get over a breakup, to
            tune out annoying people, or just chill &#38; vibe.
          </p>

          <small>
            Asking you contribute at least <strong>1 song</strong>
          </small>
        </Card.Body>

        <Card.Footer>
          <Button
            className="w-100"
            variant="success"
            href="https://open.spotify.com/playlist/2PUiLQitBgYyyiZfRzZJVD?si=68abfa257f4c4643"
            target="_blank"
          >
            Go to playlist
          </Button>
        </Card.Footer>
      </Card>

      {addPadding && <div className="px-3" />}

      <Card className="w-100" style={{ height: 300 }}>
        <Card.Body>
          <h3>Group Media Drive</h3>

          <p>
            Remember that thing you did with Jigme? Well here's you chance to
            make sure she never forgets! Add in any fun, embarassing, stupid, or
            otherwise memorable photo or video you have with her into this
            shared Google Drive.
          </p>

          <small>
            Asking you contribute at least <strong>1 photo or video</strong>
          </small>
        </Card.Body>

        <Card.Footer>
          <Button
            className="w-100"
            variant="warning"
            href="https://drive.google.com/drive/folders/1494i8A3tm3tPoUNGjbwJV3LzILNUyw8w?usp=sharing"
            target="_blank"
          >
            Go to Drive
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
