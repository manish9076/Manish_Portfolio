import React from "react";
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      percentage: 90,
      color: "bg-red-500",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      percentage: 85,
      color: "bg-green-500",
    },
    {
      name: "Spring Security",
      icon: <SiSpringsecurity />,
      percentage: 80,
      color: "bg-green-500",
    },
    {
      name: "JPA / Hibernate",
      icon: <SiHibernate />,
      percentage: 85,
      color: "bg-blue-500",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      percentage: 85,
      color: "bg-cyan-400",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      percentage: 85,
      color: "bg-yellow-400",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      percentage: 95,
      color: "bg-orange-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      percentage: 90,
      color: "bg-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      percentage: 85,
      color: "bg-cyan-400",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      percentage: 85,
      color: "bg-blue-500",
    },
    {
      name: "REST API",
      icon: <SiPostman />,
      percentage: 85,
      color: "bg-orange-500",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      percentage: 85,
      color: "bg-gray-300",
    },
    {
      name: "Microservices",
      icon: <FaServer />,
      percentage: 75,
      color: "bg-purple-500",
    },
    {
      name: "REST / Backend",
      icon: <FaCode />,
      percentage: 85,
      color: "bg-cyan-400",
    },
    {
      name: "Database",
      icon: <FaDatabase />,
      percentage: 85,
      color: "bg-indigo-500",
    },
  ];

  return (
    <section
      id="skills"
      className="
        py-20
        px-6
        bg-[#0b1224]
        scroll-mt-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
                          SECTION TITLE
        ====================================================== */}

        <div className="text-center mb-12">

          <p
            className="
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              tracking-[0.25em]
              mb-2
            "
          >
            SKILLS
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Technical Skills
          </h2>

          <p
            className="
              mt-3
              text-gray-400
              max-w-xl
              mx-auto
              text-sm
              md:text-base
            "
          >
            Technologies and tools I use to build modern,
            responsive and scalable applications.
          </p>

        </div>

        {/* =====================================================
                          SKILLS GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group

                bg-[#171f32]

                rounded-xl

                px-5
                py-4

                border
                border-white/5

                hover:border-cyan-400/60
                hover:bg-[#1a253b]

                hover:-translate-y-1

                hover:shadow-lg
                hover:shadow-cyan-400/5

                transition-all
                duration-300
              "
            >

              {/* =================================================
                              TOP ROW
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                {/* LEFT - ICON + NAME */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Icon */}

                  <div
                    className="
                      w-10
                      h-10

                      rounded-lg

                      bg-[#0b1224]

                      flex
                      items-center
                      justify-center

                      text-cyan-400
                      text-xl

                      border
                      border-white/5

                      group-hover:border-cyan-400/30

                      group-hover:scale-105

                      transition-all
                      duration-300
                    "
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Name */}

                  <h3
                    className="
                      text-base
                      md:text-lg
                      font-semibold
                      text-white

                      group-hover:text-cyan-300

                      transition-colors
                      duration-300
                    "
                  >
                    {skill.name}
                  </h3>

                </div>

                {/* Percentage */}

                <span
                  className="
                    text-cyan-400
                    text-sm
                    font-bold
                    whitespace-nowrap
                  "
                >
                  {skill.percentage}%
                </span>

              </div>

              {/* =================================================
                          PROGRESS BAR
              ================================================== */}

              <div
                className="
                  mt-4
                  w-full
                  h-1.5
                  bg-[#303b50]
                  rounded-full
                  overflow-hidden
                "
              >

                <div
                  className={`
                    ${skill.color}

                    h-full
                    rounded-full

                    transition-all
                    duration-700
                    ease-out

                    group-hover:brightness-125
                  `}
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;