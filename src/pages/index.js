import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Fragment } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";
const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Dino Krcić</title>
        <meta name="description" content="Dino K. portfolio website" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
