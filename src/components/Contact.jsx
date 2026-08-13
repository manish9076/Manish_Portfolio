import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* =====================================================
                        CONTACT SECTION
      ====================================================== */}

      <section
        id="contact"
        className="
          min-h-screen
          py-24
          px-6
          bg-[#0b1224]
          scroll-mt-20
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* =================================================
                        SECTION HEADING
          ================================================== */}

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
              CONTACT
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
              Let's Work Together
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
              Have a project or opportunity in mind?
              Feel free to get in touch with me.
            </p>

          </div>

          {/* =================================================
                        CONTACT GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-7
            "
          >

            {/* =================================================
                        LEFT - CONTACT INFORMATION
            ================================================== */}

            <div
              className="
                bg-[#171f32]
                rounded-2xl
                p-8
                md:p-10

                border
                border-white/10

                hover:border-cyan-400

                transition-all
                duration-300
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  text-white
                  mb-8
                "
              >
                Contact Information
              </h3>

              {/* ================= NAME ================= */}

              <div className="flex items-center gap-5 mb-7">

                <div
                  className="
                    w-11
                    h-11
                    flex-shrink-0
                    rounded-lg
                    bg-cyan-400/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400
                  "
                >
                  <FaUser size={20} />
                </div>

                <div>
                  <p className="text-gray-300 text-lg">

                    <span className="font-bold text-white">
                      Name:
                    </span>{" "}

                    Manish Yadav

                  </p>
                </div>

              </div>

              {/* ================= EMAIL ================= */}

              <div className="flex items-center gap-5 mb-7">

                <div
                  className="
                    w-11
                    h-11
                    flex-shrink-0
                    rounded-lg
                    bg-cyan-400/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400
                  "
                >
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <p
                    className="
                      text-gray-300
                      text-lg
                      break-all
                    "
                  >

                    <span className="font-bold text-white">
                      Email:
                    </span>{" "}

                    <a
                      href="mailto:manishyadav875652@gmail.com"
                      className="
                        hover:text-cyan-400
                        transition
                        duration-300
                      "
                    >
                      manishyadav875652@gmail.com
                    </a>

                  </p>
                </div>

              </div>

              {/* ================= LOCATION ================= */}

              <div className="flex items-center gap-5 mb-7">

                <div
                  className="
                    w-11
                    h-11
                    flex-shrink-0
                    rounded-lg
                    bg-cyan-400/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400
                  "
                >
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>

                  <p className="text-gray-300 text-lg">

                    <span className="font-bold text-white">
                      Location:
                    </span>{" "}

                    Bengaluru, India

                  </p>

                </div>

              </div>

              {/* =================================================
                            LINKEDIN
              ================================================== */}

              <div className="flex items-center gap-5 mb-7">

                {/* Clickable LinkedIn Icon */}

                <a
                  href="https://www.linkedin.com/in/manish-yadav-821984305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="
                    w-11
                    h-11
                    flex-shrink-0
                    rounded-lg

                    bg-cyan-400/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400

                    hover:bg-cyan-400
                    hover:text-[#0b1224]

                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedinIn size={20} />
                </a>

                <div>

                  <p className="text-gray-300 text-lg">

                    <span className="font-bold text-white">
                      LinkedIn:
                    </span>{" "}

                    <a
                      href="https://www.linkedin.com/in/manish-yadav-821984305/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        hover:text-cyan-400
                        transition
                        duration-300
                      "
                    >
                      View Profile
                    </a>

                  </p>

                </div>

              </div>

              {/* =================================================
                            GITHUB
              ================================================== */}

              <div className="flex items-center gap-5">

                {/* Clickable GitHub Icon */}

                <a
                  href="https://github.com/manish9076"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="
                    w-11
                    h-11
                    flex-shrink-0
                    rounded-lg

                    bg-cyan-400/10

                    flex
                    items-center
                    justify-center

                    text-cyan-400

                    hover:bg-cyan-400
                    hover:text-[#0b1224]

                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={20} />
                </a>

                <div>

                  <p className="text-gray-300 text-lg">

                    <span className="font-bold text-white">
                      GitHub:
                    </span>{" "}

                    <a
                      href="https://github.com/manish9076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        hover:text-cyan-400
                        transition
                        duration-300
                      "
                    >
                      View Profile
                    </a>

                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                        RIGHT - CONTACT FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              "
            >

              {/* ================= NAME ================= */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-5

                  rounded-2xl

                  bg-[#171f32]

                  border
                  border-white/10

                  text-white

                  placeholder-gray-400

                  outline-none

                  focus:border-cyan-400

                  transition
                  duration-300
                "
              />

              {/* ================= EMAIL ================= */}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-5

                  rounded-2xl

                  bg-[#171f32]

                  border
                  border-white/10

                  text-white

                  placeholder-gray-400

                  outline-none

                  focus:border-cyan-400

                  transition
                  duration-300
                "
              />

              {/* ================= SUBJECT ================= */}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="
                  md:col-span-2

                  w-full
                  p-5

                  rounded-2xl

                  bg-[#171f32]

                  border
                  border-white/10

                  text-white

                  placeholder-gray-400

                  outline-none

                  focus:border-cyan-400

                  transition
                  duration-300
                "
              />

              {/* ================= MESSAGE ================= */}

              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  md:col-span-2

                  w-full
                  p-5

                  rounded-2xl

                  bg-[#171f32]

                  border
                  border-white/10

                  text-white

                  placeholder-gray-400

                  outline-none

                  resize-none

                  focus:border-cyan-400

                  transition
                  duration-300
                "
              />

              {/* ================= SUBMIT ================= */}

              <div className="md:col-span-2">

                <button
                  type="submit"
                  className="
                    px-8
                    py-4

                    rounded-full

                    bg-cyan-400
                    text-[#0b1224]

                    font-bold
                    text-lg

                    hover:bg-cyan-300
                    hover:-translate-y-1

                    hover:shadow-lg
                    hover:shadow-cyan-400/20

                    transition-all
                    duration-300
                  "
                >
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </div>
      </section>

      {/* =====================================================
                            FOOTER
      ====================================================== */}

      <footer
        className="
          bg-[#050a18]
          py-12
          px-6
          text-center
        "
      >

        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Manish Yadav
        </h3>

        <p
          className="
            mt-3
            text-gray-400
          "
        >
          Frontend Developer & Full Stack Developer | MCA Graduate
        </p>

        {/* ================= SOCIAL ICONS ================= */}

        <div
          className="
            flex
            justify-center
            gap-5
            mt-6
          "
        >

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/manish-yadav-821984305/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              w-11
              h-11
              rounded-full

              bg-[#171f32]

              flex
              items-center
              justify-center

              text-white

              hover:bg-cyan-400
              hover:text-[#0b1224]

              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/manish9076"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              w-11
              h-11
              rounded-full

              bg-[#171f32]

              flex
              items-center
              justify-center

              text-white

              hover:bg-cyan-400
              hover:text-[#0b1224]

              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <FaGithub size={18} />
          </a>

        </div>

        {/* ================= COPYRIGHT ================= */}

        <p
          className="
            text-gray-500
            text-sm
            mt-7
          "
        >
          © {new Date().getFullYear()} Manish Yadav. All rights reserved.
        </p>

      </footer>
    </>
  );
};

export default Contact;