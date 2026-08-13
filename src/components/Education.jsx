import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      university: "PES University, Bengaluru",
      duration: "2024 – 2026",
      status: "Completed",
    },
    {
      degree: "Bachelor of Computer Applications – Data Science & AI",
      university: "BBD University, Lucknow",
      duration: "2021 – 2024",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="
        py-20
        px-6
        bg-[#0b1224]
        scroll-mt-20
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= TITLE ================= */}

        <div className="text-center mb-12">

          <p
            className="
              text-cyan-400
              text-lg
              font-semibold
              tracking-widest
              mb-2
            "
          >
            EDUCATION
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            Academic Journey
          </h2>

        </div>

        {/* ================= EDUCATION CARDS ================= */}

        <div className="space-y-5">

          {education.map((item) => (
            <div
              key={item.degree}
              className="
                group
                bg-[#171f32]

                rounded-2xl

                px-6
                py-5

                border
                border-white/10

                hover:border-cyan-400
                hover:bg-[#1a253b]

                transition-all
                duration-300
              "
            >

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  gap-5
                "
              >

                {/* ================= ICON ================= */}

                <div
                  className="
                    flex-shrink-0

                    w-12
                    h-12

                    rounded-full

                    bg-cyan-400/10

                    border
                    border-cyan-400/30

                    flex
                    items-center
                    justify-center

                    text-cyan-400

                    group-hover:bg-cyan-400
                    group-hover:text-[#0b1224]

                    transition-all
                    duration-300
                  "
                >
                  <FaGraduationCap size={20} />
                </div>

                {/* ================= DEGREE ================= */}

                <div className="flex-1">

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="
                      text-cyan-400
                      mt-1
                      font-medium
                    "
                  >
                    {item.university}
                  </p>

                </div>

                {/* ================= YEAR ================= */}

                <div
                  className="
                    md:text-right
                    md:min-w-[150px]
                  "
                >

                  <p
                    className="
                      text-gray-300
                      font-medium
                    "
                  >
                    {item.duration}
                  </p>

                  <span
                    className="
                      inline-block
                      mt-1
                      text-sm
                      text-cyan-400
                    "
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;