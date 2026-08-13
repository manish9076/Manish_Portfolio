import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Hero = () => {
  // No card selected initially
  const [activeStat, setActiveStat] = useState(null);

  // Scroll to Contact section
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Statistics
  const stats = [
    {
      number: "3+",
      title: "Projects",
    },
    {
      number: "2+",
      title: "Internship",
    },
    {
      number: "10+",
      title: "Technical Skills",
    },
    {
      number: "500+",
      title: "LinkedIn Connections",
    },
  ];

  return (
    <section
      id="home"
      className="
        min-h-screen
        pt-20
        flex
        items-center
        bg-[#0b1224]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          w-full
        "
      >

        {/* =====================================================
                            HERO SECTION
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
            min-h-[650px]
            py-16
          "
        >

          {/* =====================================================
                            LEFT SIDE
          ====================================================== */}

          <div>

            {/* Greeting */}

            <p
              className="
                text-cyan-400
                text-2xl
                md:text-3xl
                mb-5
              "
            >
              👋 Hello, I'm
            </p>

            {/* =================================================
                            ANIMATED NAME
            ================================================== */}

            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
              "
            >

              {/* Manish */}

              {"Manish".split("").map((letter, index) => (
                <span
                  key={`manish-${index}`}
                  className="
                    inline-block
                    text-white
                    opacity-0
                    animate-name-letter
                  "
                  style={{
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  {letter}
                </span>
              ))}

              {/* Space */}

              <span>&nbsp;</span>

              {/* Yadav */}

              {"Yadav".split("").map((letter, index) => (
                <span
                  key={`yadav-${index}`}
                  className="
                    inline-block
                    text-cyan-400
                    opacity-0
                    animate-name-letter
                  "
                  style={{
                    animationDelay: `${(index + 7) * 0.12}s`,
                  }}
                >
                  {letter}
                </span>
              ))}

            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                text-gray-300
                text-lg
                md:text-xl
                leading-8
                max-w-2xl
              "
            >
              Full Stack Developer and MCA graduate passionate about
              creating responsive, modern and user-friendly web
              applications using Java, Spring Boot, React and MySQL.
            </p>

            {/* =================================================
                            BUTTONS
            ================================================== */}

            <div
              className="
                flex
                flex-wrap
                gap-5
                mt-8
              "
            >

              {/* Hire Me */}

              <button
                onClick={scrollToContact}
                className="
                  px-9
                  py-4
                  rounded-full

                  bg-blue-600
                  text-white

                  font-semibold
                  text-lg

                  hover:bg-blue-700
                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                Hire Me
              </button>

              {/* Download CV */}

              <a
                href="resume.pdf"
                download
                className="
                  px-9
                  py-4
                  rounded-full

                  border
                  border-gray-300

                  text-white

                  font-semibold
                  text-lg

                  hover:bg-white
                  hover:text-[#0b1224]
                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                Download CV
              </a>

            </div>

            {/* =================================================
                            SOCIAL ICONS
            ================================================== */}

            <div
              className="
                flex
                gap-5
                mt-12
              "
            >

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/manish-yadav-821984305/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-14
                  h-14
                  rounded-full

                  bg-[#1a243b]
                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-cyan-400
                  hover:text-black
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/manish9076"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-14
                  h-14
                  rounded-full

                  bg-[#1a243b]
                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-cyan-400
                  hover:text-black
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                <FaGithub size={20} />
              </a>

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-14
                  h-14
                  rounded-full

                  bg-[#1a243b]
                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-cyan-400
                  hover:text-black
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                <FaFacebookF size={20} />
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-14
                  h-14
                  rounded-full

                  bg-[#1a243b]
                  text-white

                  flex
                  items-center
                  justify-center

                  hover:bg-cyan-400
                  hover:text-black
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={20} />
              </a>

            </div>

          </div>

          {/* =====================================================
                        RIGHT SIDE - PROFILE IMAGE
          ====================================================== */}

          <div
            className="
              flex
              justify-center
              lg:justify-end
              items-center
            "
          >

            {/* Floating Image */}

            <div
              className="
                animate-float

                w-[280px]
                h-[280px]

                sm:w-[340px]
                sm:h-[340px]

                md:w-[390px]
                md:h-[390px]

                lg:w-[430px]
                lg:h-[430px]

                rounded-full

                border-[8px]
                border-[#27334d]

                p-1

                overflow-hidden

                shadow-2xl
                shadow-cyan-400/10

                transition-all
                duration-300
              "
            >

              <img
                src="/image.png"
                alt="Manish Yadav"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-full
                "
              />

            </div>

          </div>

        </div>

        {/* =====================================================
                            STATS SECTION
        ====================================================== */}

        <div className="pb-16">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-1

              overflow-hidden
              rounded-3xl
            "
          >

            {stats.map((stat, index) => {

              const isActive = activeStat === index;

              return (
                <button
                  key={stat.title}
                  onClick={() => setActiveStat(index)}
                  className={`
                    group

                    min-h-[210px]

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-center

                    px-5
                    py-8

                    border
                    border-[#0b1224]

                    cursor-pointer

                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isActive
                        ? `
                          bg-blue-600
                          border-blue-600
                          scale-[1.01]
                        `
                        : `
                          bg-[#171f32]
                          hover:bg-blue-600
                          hover:border-blue-600
                        `
                    }

                    ${
                      index === 0
                        ? "lg:rounded-l-3xl"
                        : ""
                    }

                    ${
                      index === stats.length - 1
                        ? "lg:rounded-r-3xl"
                        : ""
                    }

                    ${
                      index !== 0 &&
                      index !== stats.length - 1
                        ? "lg:rounded-none"
                        : ""
                    }

                    sm:rounded-none
                  `}
                >

                  {/* STAT NUMBER */}

                  <h2
                    className="
                      text-5xl
                      md:text-6xl
                      font-bold

                      text-cyan-400

                      transition-colors
                      duration-300
                    "
                  >
                    {stat.number}
                  </h2>

                  {/* STAT TITLE */}

                  <p
                    className="
                      mt-4

                      text-lg
                      md:text-xl

                      text-white

                      font-medium
                    "
                  >
                    {stat.title}
                  </p>

                </button>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;