import Head from "next/head";
// react icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiHtml5, DiCss3, DiJavascript, DiPhp } from "react-icons/di";
import { FaVuejs, FaReact, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

// react particles
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

// next images
import Image from "next/image";
import logo from "../public/logo.svg";
import portrait from "../public/portrait.jpg";

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
          href="https://www.kamil--m.com/portfolio/favicon.ico"
        />
      </Head>

      <header className=" shadow-lg relative z-10">
        <nav className="max-w-6xl mx-auto p-5">
          <ul className="flex justify-between items-center">
            <li>
              <a
                className="flex items-center saturate-100 gap-2 hover:saturate-50"
                href="https://www.kamil--m.com/"
              >
                <Image
                  src={logo}
                  className="w-8 h-8 "
                  alt="Kamil Malinowski logo"
                />
                <h1 className="text-primary font-bold md:block hidden">
                  kamil--m.com
                </h1>
              </a>
            </li>
            <li>
              <div className="flex gap-2">
                <a
                  className="bg-gradient-to-br from-primary to-purple-900 rounded-lg w-8 h-8 grid place-content-center hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary"
                  href="https://github.com/kamilMalinowski"
                >
                  <AiFillGithub className="w-6 h-6 fill-slate-200" />
                </a>
                <a
                  className="bg-gradient-to-br from-primary to-purple-900 rounded-lg w-8 h-8 grid place-content-center hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary"
                  href="https://www.linkedin.com/in/kamil-malinowski-4034601b5/"
                >
                  <AiFillLinkedin className="w-6 h-6 fill-slate-200 " />
                </a>
                <a
                  href="https://www.kamil--m.com/portfolio/kamil-malinowski__cv--22.12.2022.pdf"
                  className="h-8 bg-gradient-to-br from-primary to-purple-900 text-slate-200  rounded-lg grid place-content-center px-4 hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary hover:text-slate-100"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover relative z-10 bg-fixed">
          <section className="max-w-6xl mx-auto p-5 min-h-screen grid place-content-center md:flex md:flex-row md:items-center">
            <div className="basis-full text-center md:text-left">
              <h2 className="font-bold  text-4xl py-3 md:text-6xl tracking-widest">
                Kamil Malinowski
              </h2>
              <h3 className="text-lg text-secondary md:text-2xl">
                Junior Frontend Developer
              </h3>
              <p className="py-4 text-sm opacity-80 leading-6">
                I have almost <span className="text-secondary">2 years</span> of
                experience in frontend, which I gained in the e-commerce
                industry while developing online shops. I am constantly
                expanding my knowledge and skills, improving my technology
                stack. In addition to frontend, I also feel good at
                <span className="text-secondary">
                  {" "}
                  computer graphics and UX/UI
                </span>{" "}
                design (good knowledge of the Adobe suite - PS, AI, XD and{" "}
                <span className="text-secondary">Figma</span>), which allow me
                to understand better the aesthetic and usability aspects of
                websites and applications.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-4 md:flex-col md:basis-full">
              <Image
                className="w-20  rounded-lg shadow-lg saturate-0  h-auto mix-blend-color-burn "
                src={portrait}
                alt="Kamil Malinowski portrait"
              />
              <Image
                className="w-28 md:w-36 rounded-lg h-auto shadow-lg border border-b-4 border-secondary"
                src={portrait}
                alt="Kamil Malinowski portrait"
              />
              <Image
                className="w-20 rounded-lg h-auto shadow-lg  saturate-0 mix-blend-color-burn "
                src={portrait}
                alt="Kamil Malinowski portrait"
              />
            </div>
          </section>
        </div>

        <div className="relative z-10">
          <section className="max-w-6xl mx-auto p-5 min-h-screen flex flex-col justify-center ">
            <h3 className="text-lg text-secondary  md:text-2xl text-center">
              Projects
            </h3>
            <ul className="fetch-list mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              <li className="overflow-hidden w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto border-2 border-pink-500">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/music"
                >
                  <h4 className="text-left text-pink-500">
                    vue-kamil--m-music
                  </h4>
                  <AiFillGithub className="w-24 h-24 fill-pink-500 absolute -bottom-8 -right-8" />
                  <p className="text-primary text-xs h-16">
                    Official website of PL progressive metal band MLU
                  </p>
                  <p className="text-pink-500 text-xs">
                    status: work in progress
                  </p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/movies/wwm"
                >
                  <h4 className="text-left text-secondary">
                    vue-world-s-worst-movies
                  </h4>
                  <AiFillGithub className="w-6 h-6 fill-yellow-300 absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    Ranking of world&apos;s worst movies of all time, using
                    Vue.js framework.
                  </p>
                  <p className="text-yellow-300 text-xs">status: preparation</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/movies/creator"
                >
                  <h4 className="text-left text-secondary">vue-wwm-creator</h4>
                  <AiFillGithub className="w-6 h-6 fill-blue-500 absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    WWM Creator - here you enter the worst movie you have ever
                    watched.
                  </p>
                  <p className="text-blue-500 text-xs">status: testing</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/education"
                >
                  <h4 className="text-left text-secondary">
                    react-english-helper
                  </h4>
                  <AiFillGithub className="w-6 h-6 fill-white absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    English learning application using free API.
                  </p>
                  <p className="text-white text-xs">status: design</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/games"
                >
                  <h4 className="text-left text-secondary">mlu-game</h4>
                  <AiFillGithub className="w-6 h-6 fill-primary absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    A long-delayed passion for combining pixels into amazing
                    artistic works.
                  </p>
                  <p className="text-gray-400 text-xs">status: on hiatus</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.kamil--m.com/shops"
                >
                  <h4 className="text-left text-secondary">
                    vanillajs-tongue-drums-shop
                  </h4>
                  <AiFillGithub className="w-6 h-6 fill-secondary absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    My own concept of one page shop, created with vanilla
                    JavaScript.
                  </p>
                  <p className="text-secondary text-xs">status: finished</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://www.z-promo.com/pl/v4/powerhold/"
                >
                  <h4 className="text-left text-secondary">
                    vanillajs-one-page-shop
                  </h4>
                  <AiFillGithub className="w-6 h-6 fill-secondary absolute -top-2 -right-2" />
                  <p className="text-primary text-xs h-16 left">
                    A one-page store created for the employer. Working with
                    html, scss, javascript, splide js, php.
                  </p>
                  <p className="text-secondary text-xs">status: finished</p>
                </a>
              </li>

              <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto border-2 border-secondary">
                <a
                  className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
                  href="https://github.com/kamilMalinowski/react-portfolio-2023"
                >
                  <h4 className="text-left text-pink-500">
                    react-portfolio-2023
                  </h4>
                  <AiFillGithub className="w-6 h-6 fill-pink-500 absolute -top-2 -right-2" />
                  <p className="text-secondary text-xs  left">
                    Portfolio cointaining my most important projects. Based on
                    React and Next.js.
                  </p>
                  <p className="text-secondary text-xs font-bold">
                    <span className="text-pink-500 ">🔥update:</span> 21.12.2022
                  </p>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="bg-fixed bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover relative z-10 ">
          <section className="max-w-6xl mx-auto p-5  min-h-screen grid place-content-center ">
            <h3 className="text-lg text-secondary text-center md:text-2xl">
              My skills
            </h3>
            <ul className="grid justify-center items-center mt-4 gap-12 grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              <li>
                <DiHtml5 className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <DiCss3 className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <DiJavascript className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <FaVuejs className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <FaReact className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <FaAngular className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <SiTailwindcss className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <SiBootstrap className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <SiMysql className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
              <li>
                <DiPhp className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
              </li>
            </ul>
          </section>
        </div>

        <div className="">
          <section className=" max-w-6xl mx-auto p-5 min-h-screen flex flex-col justify-center">
            <h3 className="text-lg text-secondary text-center md:text-2xl">
              Experience
            </h3>
            <div className="flex flex-col justify-between gap-5 md:flex-row mt-4">
              <section className="relative z-10 base-full w-full shadow-2xl p-8 rounded-xl bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover ">
                <p className="text-yellow-300 text-sm">11.2022 – </p>
                <h4 className="font-bold text-2xl text-slate-200">
                  Freelancer
                </h4>
                <h5 className="text-sm">
                  - 7 Willows Sp. z o. o.{" "}
                  <span className="text-secondary text-xs">
                    (successfully completed)
                  </span>
                </h5>
                <ul className="flex gap-2 flex-wrap my-4">
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      html
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      css
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      bootstrap
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      ux/ui
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      logo design
                    </p>
                  </li>
                </ul>
                <h5 className="text-sm">
                  - My Little Universe band{" "}
                  <span className="text-pink-500 text-xs">
                    (work in progress)
                  </span>
                </h5>
                <ul className="flex gap-2 flex-wrap my-4">
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      vue.js
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      instagram api
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      node.js
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      html
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      bem
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      css
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      sass
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      javascript
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      ...
                    </p>
                  </li>
                </ul>
              </section>
              <section className="relative z-10 base-full w-full shadow-2xl p-8 rounded-xl bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover ">
                <p className="text-yellow-300 text-sm">02.2021 – 11.2022</p>
                <h4 className="font-bold text-2xl text-slate-200">
                  Junior Frontend Developer
                </h4>
                <h5 className="text-sm">Droplead sp. z o. o. Elbląg</h5>
                <ul className="flex gap-2 flex-wrap mt-4">
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      html
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      css
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      sass
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      bem
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      javascript
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      jquery
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      webpack
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      php
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      mysql
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      bootstrap
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      tailwind css
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      wordpress
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      acf
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      npm
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      git
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      siteground
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      baselinker
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      figma
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      photoshop
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      illustrator
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      XD
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      ux/ui
                    </p>
                  </li>
                  <li>
                    <p className="hover:bg-yellow-300 px-3 py-0.5 rounded-3xl hover:text-yellow-900 text-xs text-slate-800 bg-slate-300">
                      logo design
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-fixed text-center px-4 py-12 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover shadow-lg relative z-10">
        <p className="text-xs">Copyright © Kamil Malinowski</p>
      </footer>
    </div>
  );
}
