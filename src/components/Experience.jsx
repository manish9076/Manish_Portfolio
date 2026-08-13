import React from "react";
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  // ================= PROJECTS =================

  const projects = [
    {
      title: "TalentScoutIE",
      description:
        "Worked on frontend development and user-interface implementation for the TalentScoutIE web platform, focusing on responsive layouts, reusable components and a clean user experience.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      link: "https://talentscoutie.com/",
    },

    {
      title: "DMPG Prosperity Group",
      description:
        "Contributed to frontend development for a professional business website with service-focused pages, responsive layouts and user-friendly navigation.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      link: "https://dmprosperitygroup.com/services/",
    },
  ];

  // ================= TECHNOLOGIES =================

  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ];

  return (
    <section
      id="experience"
      className="
        py-24
        px-6
        bg-[#0b1224]
        scroll-mt-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
                            SECTION HEADING
        ====================================================== */}

        <div className="text-center mb-14">

          <p
            className="
              text-cyan-400
              text-lg
              md:text-xl
              font-semibold
              tracking-widest
              mb-3
            "
          >
            EXPERIENCE
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-white
            "
          >
            Professional Experience
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            My internship experience and practical frontend development
            work on real-world web projects.
          </p>

        </div>

        {/* =====================================================
                        MAIN EXPERIENCE CARD
        ====================================================== */}

        <div
          className="
            bg-[#171f32]
            rounded-3xl
            border
            border-white/10
            p-7
            md:p-10

            hover:border-cyan-400

            transition-all
            duration-300
          "
        >

          {/* =====================================================
                        COMPANY / ROLE / DATE
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-start
              md:justify-between
              gap-6
            "
          >

            {/* LEFT - COMPANY */}

            <div className="flex gap-5">

              {/* Briefcase Icon */}

              <div
                className="
                  w-14
                  h-14
                  flex-shrink-0

                  rounded-2xl

                  bg-cyan-400/10

                  border
                  border-cyan-400/30

                  flex
                  items-center
                  justify-center

                  text-cyan-400
                "
              >
                <FaBriefcase size={24} />
              </div>

              {/* Role */}

              <div>

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                  "
                >
                  Frontend Developer Intern
                </h3>

                <p
                  className="
                    text-cyan-400
                    text-lg
                    font-semibold
                    mt-1
                  "
                >
                  Vanya IT
                </p>

              </div>

            </div>

            {/* RIGHT - DATE */}

            <div className="md:text-right">

              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full

                  bg-cyan-400/10

                  border
                  border-cyan-400/20

                  text-cyan-400
                  font-medium
                "
              >
                2026
              </span>

              <p
                className="
                  text-gray-400
                  text-sm
                  mt-2
                "
              >
                Internship
              </p>

            </div>

          </div>

          {/* =====================================================
                            DESCRIPTION
          ====================================================== */}

          <div className="mt-8">

            <p
              className="
                text-gray-300
                leading-8
                text-lg
              "
            >
              During my internship at Vanya IT, I worked as a
              Frontend Developer and gained practical experience in
              building responsive and user-friendly web interfaces.
              I worked with modern frontend technologies and
              contributed to real-world website development.
            </p>

          </div>

          {/* =====================================================
                        KEY RESPONSIBILITIES
          ====================================================== */}

          <div className="mt-8">

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-4
              "
            >
              Key Responsibilities
            </h4>

            <div className="grid md:grid-cols-2 gap-3">

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-300
                "
              >
                <span className="text-cyan-400 text-xl">
                  ✓
                </span>

                <p>
                  Developed responsive and user-friendly frontend
                  interfaces.
                </p>
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-300
                "
              >
                <span className="text-cyan-400 text-xl">
                  ✓
                </span>

                <p>
                  Built reusable React components for web applications.
                </p>
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-300
                "
              >
                <span className="text-cyan-400 text-xl">
                  ✓
                </span>

                <p>
                  Implemented responsive layouts using Tailwind CSS.
                </p>
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-300
                "
              >
                <span className="text-cyan-400 text-xl">
                  ✓
                </span>

                <p>
                  Worked with modern JavaScript and frontend development
                  practices.
                </p>
              </div>

            </div>

          </div>

          {/* =====================================================
                            TECHNOLOGIES
          ====================================================== */}

          <div className="mt-9">

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-5
              "
            >
              Technologies Used
            </h4>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >

              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-2

                    rounded-lg

                    bg-[#0b1224]

                    border
                    border-white/10

                    text-gray-200

                    hover:border-cyan-400
                    hover:text-cyan-400

                    transition-all
                    duration-300
                  "
                >

                  <span className="text-cyan-400 text-lg">
                    {technology.icon}
                  </span>

                  {technology.name}

                </span>
              ))}

            </div>

          </div>

          {/* =====================================================
                        PROJECTS WORKED ON
          ====================================================== */}

          <div className="mt-10">

            <h4
              className="
                text-white
                font-semibold
                text-xl
                mb-5
              "
            >
              Projects Worked On
            </h4>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >

              {projects.map((project) => (
                <div
                  key={project.title}
                  className="
                    group

                    bg-[#0e162b]

                    rounded-2xl

                    p-6

                    border
                    border-white/10

                    hover:border-cyan-400
                    hover:-translate-y-2

                    transition-all
                    duration-300
                  "
                >

                  {/* Project Title */}

                  <div className="flex items-center justify-between gap-3">

                    <h5
                      className="
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {project.title}
                    </h5>

                    <FaExternalLinkAlt
                      className="
                        text-gray-500
                        group-hover:text-cyan-400
                        transition
                      "
                      size={16}
                    />

                  </div>

                  {/* Project Description */}

                  <p
                    className="
                      text-gray-400
                      mt-4
                      leading-7
                    "
                  >
                    {project.description}
                  </p>

                  {/* Project Technologies */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    "
                  >

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          px-3
                          py-1

                          rounded-md

                          bg-cyan-400/10

                          text-cyan-400

                          border
                          border-cyan-400/20

                          text-sm
                          font-medium
                        "
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* View Project Button */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2

                      mt-6

                      px-5
                      py-2.5

                      rounded-lg

                      bg-cyan-400
                      text-[#0b1224]

                      font-semibold

                      hover:bg-cyan-300
                      hover:-translate-y-1

                      transition-all
                      duration-300
                    "
                  >
                    View Project

                    <FaExternalLinkAlt size={13} />
                  </a>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;