import Head from "next/head";

// react particles
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

// react components
import TheHeader from "./layout/TheHeader";
import AboutMe from "./layout/AboutMe";
import MyProjects from "./layout/MyProjects";
import MySkills from "./layout/MySkills";
import MyExperience from "./layout/MyExperience";
import TheFooter from "./layout/TheFooter";

export default function Home() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);
  return (
    <div className="font-nunito text-slate-300 bg-slate-900">
      <Particles options={particlesOptions} init={particlesInit} />
      <Head>
        <title>Kamil Malinowski | Portfolio 2023</title>
        <meta
          name="description"
          content="Kamil Malinowski - Junior Frontend Developer | Portfolio 2023"
        />
        <link
          rel="icon"
          href="https://www.kamil--m.com/favicon.svg"
        />
      </Head>
      <TheHeader></TheHeader>
      <main>
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <MySkills></MySkills>
        <MyExperience></MyExperience>
      </main>
      <TheFooter></TheFooter>
    </div>
  );
}
