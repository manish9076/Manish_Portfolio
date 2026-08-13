import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "WorkHive Service Management",
      image: "workhive.png",
      description:
        "A full-stack service management and booking platform where users can explore services, book services, and manage their bookings. Admins can add, update and delete services.",
      tech: ["React", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/manish9076",
      live: "#",
    },

    {
      title: "Urban Helper",
      image: "urban.png",
      description:
        "A service booking platform inspired by Urban Company where users can browse different services, view service details and book required services.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/manish9076",
      live: "#",
    },

    {
      title: "Portfolio",
      image: "chat.png",
      description:
        "A modern responsive portfolio website designed to showcase my skills, projects, experience and contact information.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/manish9076",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="
        min-h-screen
        py-24
        px-6
        bg-[#0b1224]
        scroll-mt-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ================================
                SECTION HEADING
        ================================= */}

        <div className="text-center mb-14">

          {/* Small Heading */}
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
            PORTFOLIO
          </p>

          {/* Main Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-white
            "
          >
            Featured Projects
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-4
              text-gray-400
              text-lg
              md:text-xl
            "
          >
            Some of my full-stack development and academic projects.
          </p>
        </div>

        {/* ================================
                PROJECT GRID
        ================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#171f32]
                rounded-2xl
                overflow-hidden

                border
                border-white/10

                hover:border-cyan-400
                hover:-translate-y-2

                transition-all
                duration-300

                flex
                flex-col
              "
            >

              {/* ================================
                      FIXED PROJECT IMAGE
              ================================= */}

              <div
                className="
                  w-full
                  h-[220px]
                  overflow-hidden
                  bg-[#111827]
                  flex-shrink-0
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* ================================
                      PROJECT CONTENT
              ================================= */}

              <div
                className="
                  p-6
                  flex
                  flex-col
                  flex-1
                "
              >

                {/* Project Title */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    leading-tight
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-gray-300
                    mt-4
                    leading-7
                    text-base
                  "
                >
                  {project.description}
                </p>

                {/* ================================
                        TECHNOLOGY BADGES
                ================================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-5
                  "
                >
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1
                        rounded-md

                        bg-cyan-400
                        text-[#0b1224]

                        text-sm
                        font-semibold

                        hover:bg-cyan-300

                        transition
                        duration-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ================================
                        BUTTONS
                ================================= */}

                <div
                  className="
                    flex
                    gap-3
                    mt-auto
                    pt-7
                  "
                >

                  {/* GitHub Button */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      px-5
                      py-3

                      rounded-lg

                      bg-cyan-400
                      text-[#0b1224]

                      font-semibold

                      hover:bg-cyan-300

                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {/* Live Demo Button */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      px-5
                      py-3

                      rounded-lg

                      border
                      border-cyan-400

                      text-cyan-400

                      font-semibold

                      hover:bg-cyan-400
                      hover:text-[#0b1224]

                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt size={15} />
                    Live Demo
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;