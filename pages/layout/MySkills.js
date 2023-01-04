import { DiHtml5, DiCss3, DiJavascript, DiPhp } from "react-icons/di";
import { FaVuejs, FaReact, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

function MySkills() {
  return (
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
  );
}

export default MySkills;
