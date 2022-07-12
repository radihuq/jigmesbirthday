import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-primary min-vh-100 max-vw-100 d-flex flex-column">
      <Head>
        <title>Jigme Birthday | 404</title>
        <meta name="description" content="Leaderboards for your parties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="display-4 text-white">
          404 - this page could not be found. <Link href="/">Go back home</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
