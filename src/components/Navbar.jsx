import React from "react";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e162b]/95 backdrop-blur-md border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2"
        >
          {/* <span className="text-3xl text-cyan-400 font-bold">
            &lt;/&gt;
          </span> */}

          <span className="text-3xl font-bold text-white">
            Manish
          </span>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-200 hover:text-cyan-400 font-medium transition duration-300"
            >
              {item.name}
            </button>
          ))}

        </nav>

        {/* Theme Button */}
        <button
          className="w-11 h-11 rounded-lg border border-cyan-400
          flex items-center justify-center text-cyan-400
          hover:bg-cyan-400 hover:text-[#0b1224]
          transition duration-300"
        >
          ☾
        </button>

      </div>
    </header>
  );
};

export default Navbar;