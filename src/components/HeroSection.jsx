import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-24 md:pt-32"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – TEXT */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-muted-foreground">Hi, I'm</span>

            <span className="text-primary break-words">
              Vansh Pratap Singh Jadon
            </span>
          </h1>


          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            I’m a tech-driven developer passionate about building intelligent
            web applications using <span className="text-primary font-medium">AI, Machine Learning</span>, 
            and modern frontend technologies. I enjoy transforming real-world
            problems into scalable, user-friendly digital solutions through
            hands-on projects and continuous learning.
          </p>

          <div className="pt-4 flex gap-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img
              src="/projects/Screenshot 2026-01-20 000555.png"   // 👈 PUT YOUR IMAGE HERE
              alt="Vansh Pratap Singh Jadon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
