import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex justify-center py-20 px-4 sm:px-6 lg:px-8 h-lvh">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div
              className="w-full aspect-square rounded-xl bg-center bg-no-repeat bg-cover shadow-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLAKllHqaNoUbcuk1UbaO3q3Q1kiPxz2G-zJmdOGtYixR0PnmzrOX7YzHBBdxBftEz2Gyr0HbnzxBuHMGZbOpTGUEAM3FEipREjSD66RncStOOOCjBLTHUrd9Nw5Dp7Rpy7SWN1Aiw5qEoHWAPk0yytednP1nVLq-3P6oCzEpgQcidphlIW746IuqXXR5TxfOLe8FRN9biHyAwHwnHnhkkwO2sbN3pPRM5g3YtBIET3Rp3GgsZOfqBg0vJER7kC64mgQgzk7xoxfw")',
              }}
            ></div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                Amit Kumar
              </h1>
              <p className="text-lg md:text-xl text-slate-400">
                Full-Stack Developer
              </p>
            </div>
            <p className="text-base text-slate-300">
              I build elegant and efficient web solutions from front to back.
              Passionate about creating seamless user experiences with clean
              code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:bg-primary/90 transition-colors"
                href="#projects"
              >
                View My Work
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary/20 text-primary text-base font-bold shadow-sm hover:bg-primary/30 transition-colors"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;