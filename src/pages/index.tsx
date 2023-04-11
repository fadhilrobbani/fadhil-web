import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Fadhil&apos;s Portofolio</title>
      </Head>
      <Navbar />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
