import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormControlProps,
  FormProps,
} from "react-bootstrap";

import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

        <div className="d-none d-md-flex flex-column">
          <MessageWall addPadding={false} />

          <hr />
          <h4 className="display-4 text-white">More Gifts!</h4>

          <div className="d-flex flex-row ">
            <Gifts addPadding={true} />
          </div>
        </div>

        <div className="d-flex d-md-none flex-column">
          <MessageWall addPadding={true} />

          <hr />
          <h4 className="display-4 text-white">More Gifts!</h4>

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

const messages: { message: string; name: string }[] = [
  {
    message: "Happy birthday Jigme!!",
    name: "Radi",
  },
  {
    message: "Happy Birthday! etc etct etc e tc tc",
    name: "",
  },
];

const MessageWall = ({ addPadding }: { addPadding: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<
    { message: string; type: "error" | "success" } | undefined
  >(undefined);

  const [messageValue, setMessageValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleMessageSubmit: FormProps["onSubmit"] = async (e) => {
    try {
      e.preventDefault();
      setAlert(undefined);
      setIsLoading(true);

      const message = {
        name: nameValue,
        message: messageValue,
      };

      let { error } = await supabase.from("messages").insert(message, {
        returning: "representation",
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);

      setAlert({
        message: "There was an error - please try again.",
        type: "error",
      });

      setIsLoading(false);
    } finally {
      setAlert({
        message: "Successfully shared your message!",
        type: "success",
      });

      setNameValue("");
      setMessageValue("");
      setIsLoading(false);
    }
  };

  const handleNameValueChange: FormControlProps["onChange"] = (e) => {
    setNameValue(e.target.value);
  };

  const handleMessageValueChange: FormControlProps["onChange"] = (e) => {
    setMessageValue(e.target.value);
  };

  return (
    <Card>
      <Card.Body>
        {alert && <Alert variant={alert.type}>{alert.message}</Alert>}

        <h4 className="display-4">Leave a birthday message</h4>

        <Form onSubmit={handleMessageSubmit}>
          <Form.Group>
            <Form.Control
              placeholder="Your name"
              onChange={handleNameValueChange}
              disabled={isLoading}
              className={isLoading ? "text-muted" : undefined}
              value={nameValue}
            />
          </Form.Group>

          <div className="pt-1 pb-2">
            <small className="text-muted">Leave blank to stay anonymous</small>
          </div>

          <Form.Group className="py-2">
            <textarea
              className={isLoading ? "form-control text-muted" : "form-control"}
              data-autosize
              rows={3}
              placeholder="Type your message..."
              onChange={handleMessageValueChange}
              disabled={isLoading}
              value={messageValue}
            />
          </Form.Group>

          <Form.Group className="py-2">
            <Button
              className="w-100"
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading || messageValue === ""}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>

        <hr />

        <p>
          <Link href="/messages">See all messages</Link>
        </p>
      </Card.Body>
    </Card>
  );
};

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

      {addPadding && <div className="px-1" />}

      <Card className="w-100" style={{ height: 300 }}>
        <Card.Body>
          <h3>Group Media Drive</h3>

          <p>
            Remember that thing you did with Jigme? Well here&apos;s you chance
            to make sure she never forgets! Add in any fun, embarassing, stupid,
            or otherwise memorable photo or video you have with her into this
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
