import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import News from "../components/News";
import Blog from "../components/Blog";
import What from "../components/What";
import Career from "../components/Career";
import Footer from "../components/Footer";
import AnimationTrigger from "../components/AnimationTrigger";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AnimationTrigger animation="fadeIn" rootMargin="-25%" triggerOnce>
        <Blog />
      </AnimationTrigger>
      <AnimationTrigger animation="fadeIn" rootMargin="-25%" triggerOnce>
        <Main />
      </AnimationTrigger>
      <AnimationTrigger animation="fadeIn" rootMargin="-25%" triggerOnce>
        <What />
      </AnimationTrigger>
      <AnimationTrigger animation="fadeIn" rootMargin="-25%" triggerOnce>
        <News />
      </AnimationTrigger>
      <AnimationTrigger animation="fadeIn" rootMargin="-25%" triggerOnce>
        <Career />
      </AnimationTrigger>

      <Footer />
    </>
  );
}
