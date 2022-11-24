import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kamil Malinowski | Portfolio 2023</title>
        <meta
          name="description"
          content="Kamil Malinowski - Junior Frontend Developer | Portfolio 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <a href="https://www.kamil--m.com/">
                <img src="/logo.svg" alt="Kamil Malinowski logo" />
                <h1>kamil--m.com</h1>
              </a>
            </li>
            <li>
              <div>
                <a href="https://github.com/kamilMalinowski">
                  <img src="" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/kamil-malinowski-4034601b5/">
                  <img src="" alt="Linkedin" />
                </a>
                <a href="/kamil-malinowski__cv--04.11.2022.pdf">Resume</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2 className="font-nunito p-4 text-center font-bold text-2xl text-primary">
            Kamil Malinowski
          </h2>
          <h3>Junior Frontend Developer</h3>
          <p>
            I have almost 2 years of experience in frontend, which I gained in
            the e-commerce industry while developing online shops. I am
            constantly expanding my knowledge and skills, improving my
            technology stack. In addition to frontend, I also feel good at
            computer graphics and UX/UI design (good knowledge of the Adobe
            suite - PS, AI, XD and Figma), which allow me to understand better
            the aesthetic and usability aspects of websites and applications.
          </p>
        </section>
        <section>
          <h3>Projects</h3>
          <ul>
            <li>
              <a href="kamilmalinowski.github.io/vanillajs-tongue-drums-shop/">
                <img src="#" alt="Tongue Drums" />
              </a>
              <a href="https://github.com/kamilMalinowski/vanillajs-tongue-drums-shop">
                github
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>My skills</h3>
          <ul>
            <li>
              <img src="" alt="HTML5" />
            </li>
            <li>
              <img src="" alt="CSS3" />
            </li>
            <li>
              <img src="" alt="JavaScript" />
            </li>
            <li>
              <img src="" alt="Vue" />
            </li>
            <li>
              <img src="" alt="React" />
            </li>
            <li>
              <img src="" alt="Angular" />
            </li>
            <li>
              <img src="" alt="Tailwind Css" />
            </li>
            <li>
              <img src="" alt="Bootstrap" />
            </li>
            <li>
              <img src="" alt="MySql" />
            </li>
            <li>
              <img src="" alt="PHP" />
            </li>
            <li>
              <img src="" alt="What next?" />
            </li>
          </ul>
        </section>
        <section>
          <h3>Experience</h3>
          <section>
            <p>12.2021 – </p>
            <h4>Freelancer</h4>
            <h5>Projects: W7</h5>
            <ul>
              <li>
                <p>html</p>
              </li>
              <li>
                <p>css</p>
              </li>
              <li>
                <p>bootstrap</p>
              </li>
              <li>
                <p>ux/ui</p>
              </li>
              <li>
                <p>logo design</p>
              </li>
            </ul>
          </section>
          <section>
            <p>02.2021 – 11.2022</p>
            <h4>Junior Frontend Developer</h4>
            <h5>Droplead sp. z o. o. Elbląg</h5>
            <ul>
              <li>
                <p>html</p>
              </li>
              <li>
                <p>css</p>
              </li>
              <li>
                <p>sass</p>
              </li>
              <li>
                <p>bem</p>
              </li>
              <li>
                <p>javascript</p>
              </li>
              <li>
                <p>jquery</p>
              </li>
              <li>
                <p>webpack</p>
              </li>
              <li>
                <p>php</p>
              </li>
              <li>
                <p>mysql</p>
              </li>
              <li>
                <p>bootstrap</p>
              </li>
              <li>
                <p>tailwind css</p>
              </li>
              <li>
                <p>wordpress</p>
              </li>
              <li>
                <p>acf</p>
              </li>
              <li>
                <p>npm</p>
              </li>
              <li>
                <p>git</p>
              </li>
              <li>
                <p>siteground</p>
              </li>
              <li>
                <p>baselinker</p>
              </li>
              <li>
                <p>figma</p>
              </li>
              <li>
                <p>photoshop</p>
              </li>
              <li>
                <p>illustrator</p>
              </li>
              <li>
                <p>XD</p>
              </li>
              <li>
                <p>ux/ui</p>
              </li>
              <li>
                <p>logo design</p>
              </li>
            </ul>
          </section>
        </section>
      </main>

      <footer>
        <p>Copyright © Kamil Malinowski</p>
      </footer>
    </div>
  )
}
