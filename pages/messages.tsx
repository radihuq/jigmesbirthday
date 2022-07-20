import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, Container, Spinner } from "react-bootstrap";

import Link from "next/link";
import { supabase } from ".";

const Messages: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select("name,message");

        if (error) {
          throw error;
        }

        setMessages(data);
      } catch (error) {
        console.log(error);
        setError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="bg-primary min-vh-100 max-vw-100 d-flex flex-column">
      <Head>
        <title>Messages | Jigme&apos;s Birthday</title>
        <link rel="icon" href="/favicon.ico" />

        <style>
          background: #CF371F; background: linear-gradient(to right, #CF371F 0%,
          #CD8FCF 100%); -webkit-background-clip: text; -webkit-text-fill-color:
          transparent;
        </style>
      </Head>

      {isLoading && (
        <Container className="py-6 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <Spinner animation="border" className="text-white" />
        </Container>
      )}

      {error && !isLoading && (
        <Container className="py-6 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 text-danger text-center">
            <span className="text-danger">Something went wrong...</span>
          </h1>

          <h2 className="display-2 text-white text-center">
            Try <Link href="/messages">reloading</Link> the page 🤞
          </h2>

          <h3 className="text-white text-center">
            <Link href="/">or go back home</Link>
          </h3>
        </Container>
      )}

      {!error && !isLoading && (
        <Container className="py-6 flex-grow-1 d-flex flex-column">
          <div className="col-12">
            <h1 className="display-2 text-white text-center">
              Jigme. It is your birthday.
            </h1>
          </div>

          <div className="row d-flex justify-content-center px-4">
            {messages.map(
              ({ message, name }: { message: string; name: string }, index) => (
                <Card key={index} className="col-12 col-md-3 mx-2">
                  <Card.Body>
                    <h4 className="display-4">{message}</h4>

                    <small>
                      from <strong>{name === "" ? "anonymous" : name}</strong>
                    </small>
                  </Card.Body>
                </Card>
              )
            )}
          </div>
        </Container>
      )}

      <div>
        <p className="text-white text-center">
          Made with ♥ by Jigme&apos;s friends
        </p>
      </div>
    </div>
  );
};

export default Messages;
