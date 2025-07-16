import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center px-4 pt-24 md:pt-32 lg:pt-36 pb-10"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl gap-10">
        
        {/* Image (Right on desktop) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/projects/IMG_20250704_102818 (3).png"
            alt="Vansh Pratap Singh Jadon"
            className="rounded-2xl shadow-lg w-60 sm:w-72 md:w-96 object-cover"
          />
        </div>

        {/* Text Content (Left) */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary block opacity-0 animate-fade-in-delay-1">
              VANSH PRATAP
            </span>
            <span className="text-gradient block opacity-0 animate-fade-in-delay-2">
              SINGH JADON
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
