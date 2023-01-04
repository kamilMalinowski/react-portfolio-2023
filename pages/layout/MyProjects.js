import { AiFillGithub } from "react-icons/ai";
function MyProjects() {
  return (
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
              <h4 className="text-left text-pink-500">vue-kamil--m-music</h4>
              <AiFillGithub className="w-24 h-24 fill-pink-500 absolute -bottom-8 -right-8" />
              <p className="text-primary text-xs h-16">
                Official website of PL progressive metal band MLU
              </p>
              <p className="text-pink-500 text-xs">status: work in progress</p>
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
                Ranking of world&apos;s worst movies of all time, using Vue.js
                framework.
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
              <h4 className="text-left text-secondary">react-english-helper</h4>
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
                A one-page store created for the employer. Working with html,
                scss, javascript, splide js, php.
              </p>
              <p className="text-secondary text-xs">status: finished</p>
            </a>
          </li>

          <li className="w-full h-40 z-10 max-w-64 bg-[url('https://www.kamil--m.com/portfolio/code-bg.jpg')] bg-cover p-4 rounded-xl mx-auto border-2 border-secondary">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left hover:saturate-50 relative"
              href="https://github.com/kamilMalinowski/react-portfolio-2023"
            >
              <h4 className="text-left text-pink-500">react-portfolio-2023</h4>
              <AiFillGithub className="w-6 h-6 fill-pink-500 absolute -top-2 -right-2" />
              <p className="text-secondary text-xs  left">
                Portfolio cointaining my most important projects. Based on React
                and Next.js.
              </p>
              <p className="text-secondary text-xs font-bold">
                <span className="text-pink-500 ">🔥update:</span> 21.12.2022
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MyProjects;
