import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen
        py-28
        px-6
        scroll-mt-20
        bg-[#0b1224]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
        "
      >

        {/* ================= ABOUT CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
                        LEFT - PROFILE IMAGE
          ================================================== */}

          <div className="flex justify-center lg:justify-start">

            <div
              className="
                w-full
                max-w-[470px]
                h-[430px]

                rounded-2xl

                border-[6px]
                border-[#27334d]

                overflow-hidden

                shadow-2xl
                shadow-black/20
              "
            >
              <img
                src="/image.png"
                alt="Manish Yadav"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

          </div>

          {/* =================================================
                        RIGHT - ABOUT CONTENT
          ================================================== */}

          <div>

            {/* Small Heading */}
            <p
              className="
                text-cyan-400
                text-xl
                md:text-2xl
                font-semibold
                tracking-wide
                mb-5
              "
            >
              ABOUT ME
            </p>

            {/* Main Heading */}
            <h2
              className="
                text-2xl
                md:text-4xl
                lg:text-4xl
                font-bold
                leading-tight
                text-white
              "
            >
              Full Stack Developer & Software
              <br className="hidden md:block" />
              Developer
            </h2>

            {/* First Paragraph */}
            <p
              className="
                mt-8
                text-gray-300
                text-lg
                leading-8
              "
            >
              I’m Manish Yadav, a Full Stack Java Developer and MCA graduate. I’m passionate about building responsive, user-friendly web applications and practical software solutions. I have worked on full-stack projects, including service management and booking platforms. My technical skills include Java, Spring Boot, React, JavaScript, MySQL, JPA, and REST APIs, and I’m continuously improving my development and problem-solving skills.
            </p>

            {/* Second Paragraph */}
            <p
              className="
                mt-6
                text-gray-300
                text-lg
                leading-8
              "
            >
              I have worked on multiple academic and development
              projects including full-stack web applications and
              service management systems. I am also continuously
              improving my skills in Java, Spring Boot, React,
              JavaScript, MySQL, JPA and REST APIs.
            </p>

            {/* =================================================
                        INFORMATION CARDS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                mt-8
              "
            >

              {/* Name */}
              <div
                className="
                  bg-[#171f32]
                  p-6
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-cyan-400
                  hover:bg-[#1b263d]
                  transition-all
                  duration-300
                "
              >
                <p
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  Name:
                </p>

                <p
                  className="
                    text-gray-300
                    mt-1
                    text-lg
                  "
                >
                  Manish Yadav
                </p>
              </div>

              {/* Email */}
              <div
                className="
                  bg-[#171f32]
                  p-6
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-cyan-400
                  hover:bg-[#1b263d]
                  transition-all
                  duration-300
                "
              >
                <p
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  Email:
                </p>

                <p
                  className="
                    text-gray-300
                    mt-1
                    text-lg
                    break-all
                  "
                >
                  manishyadav875652@gmail.com
                </p>
              </div>

              {/* Education */}
              <div
                className="
                  bg-[#171f32]
                  p-6
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-cyan-400
                  hover:bg-[#1b263d]
                  transition-all
                  duration-300
                "
              >
                <p
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  Education:
                </p>

                <p
                  className="
                    text-gray-300
                    mt-1
                    text-lg
                  "
                >
                  Master of Computer Applications
                </p>
              </div>

              {/* Location */}
              <div
                className="
                  bg-[#171f32]
                  p-6
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-cyan-400
                  hover:bg-[#1b263d]
                  transition-all
                  duration-300
                "
              >
                <p
                  className="
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  Location:
                </p>

                <p
                  className="
                    text-gray-300
                    mt-1
                    text-lg
                  "
                >
                  Bengaluru, India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;