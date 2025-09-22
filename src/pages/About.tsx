import React from "react";

const About: React.FC = () => {
  const skills = [
    {
      icon: (
        <svg
          fill="currentColor"
          height="28px"
          viewBox="0 0 256 256"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
        </svg>
      ),
      title: "Front-End Development",
      description: "React, Redux, HTML, CSS, JavaScript",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          height="28px"
          viewBox="0 0 256 256"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
        </svg>
      ),
      title: "Back-End Development",
      description: "Node.js, Express",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          height="28px"
          viewBox="0 0 256 256"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
        </svg>
      ),
      title: "Database Management",
      description: "MySQL, PostgreSQL, MongoDB",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          height="28px"
          viewBox="0 0 256 256"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
        </svg>
      ),
      title: "Core CS",
      description: "Data Structures, Algorithms, OOPs, Git",
    },
  ];

  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "AGI Innovation make360 Pvt. Ltd.",
      period: "Jan 20025 - June 2025",
      description:
        "Worked on an e-commerce platform using React, Redux Toolkit, TypeScript, and Tailwind CSS. Built product listing, cart, and detail pages, integrated REST APIs, and optimized performance with React.memo, lazy loading, and code splitting",
    },
    {
      title: "Frontend Developer Intern",
      company: "Webtrack Technologies",
      period: "Jul 2024 - Dec 2024",
      description:
        "Designed and developed a portfolio and blog website with reusable components, a Markdown-based blog system, and smooth navigation using React Router. Focused on clean UI, component reusability, and dynamic rendering.",
    },
  ];

  return (
    <main className="container mx-auto flex-1 px-4 py-10 md:px-10" id="about">
      <div className="mx-auto max-w-4xl">
        <section className="mb-16">
          <h2 className="mb-8 text-center text-4xl font-bold text-white">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-lg bg-gray-800 p-6"
              >
                <div className="text-primary">{skill.icon}</div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-8 text-center text-4xl font-bold text-white">
            Experience
          </h2>
          <div className="relative border-l-2 border-gray-700 pl-8">
            {experiences.map((exp, index) => (
              <React.Fragment key={index}>
                <div
                  className={`absolute -left-[13px] ${
                    index === 0
                      ? "top-1"
                      : index === 1
                      ? "top-[148px]"
                      : "top-[295px]"
                  } h-6 w-6 rounded-full bg-primary`}
                ></div>
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="mt-2 text-base text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
