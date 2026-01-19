import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hangman game ",
    description: "A word-guessing game where the player tries to reveal a hidden word by guessing letters within limited attempts.",
    image: "/projects/Screenshot 2025-01-07 091304.png",
    tags: ["Python", "Tkinter", "GUI"],
    demoUrl: "#",
    githubUrl: "https://github.com/jadonvansh2005/hangman-game-using-python",
  },
  {
    id: 2,
    title: "SPAM Classifier",
    description:
      "Interactive web to predict a msg is SPAM or not.",
    image: "/projects/Screenshot 2025-05-01 002010.png",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "NLTK", "Data Science", "Flask", "HTML", "CSS", "Java Script"],
    demoUrl: "#",
    githubUrl: "https://github.com/jadonvansh2005/Spam-predictor-Web-using-Machine-Learning",
    reportUrl: "file:///C:/Users/LENOVO/Documents/linked%20in%20ml%20report.pdf"
  },
  {
    id: 3,
    title: "Carbon-credits-Estimator",
    description:
      "A XGBRegression model  part of Carbon-Credit(CRX) project as a AI Tool predict no. of carbon credit provide to industry by reducing carbon emmission.",
    image: "/projects/WhatsApp Image 2025-07-12 at 18.40.56_cb8469ae.png",
    tags: ["Machine learning", "XGboost", "Pipelining", "Pandas", "Numpy", "Scikit-learn", "Fast-API", "pydantic"],
    demoUrl: "#",
    githubUrl: "https://github.com/jadonvansh2005/final-ml-model",
  },
  {
    id: 4,
    title: "My portfolio ",
    description:
      "An elegant and responsive portfolio website built using React and Tailwind CSS to showcase projects, skills, and technical journey.",
    image: "/projects/Screenshot 2025-07-15 104333.png",
    tags: ["React.js", "TailWind CSS", "HTML5, jsx", "ui/ux designing", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/jadonvansh2005/final-ml-model",
  },
  {
    id: 5,
    title: "Health Bro",
    description:
      "Health Bro is a full-stack AI-powered healthcare assistant designed to support doctors and patients with intelligent decision-making, risk prediction, and automated clinical workflows.",
    image: "/projects/WhatsApp Image 2026-01-17 at 9.18.15 PM.jpeg",
    tags: ["React.js","JavaScript (ES6+)","HTML5, JSX","Tailwind CSS","UI/UX Designing","FastAPI","Python","XGBoost","Scikit-learn","Natural Language Processing (NLP)","Whisper (Speech-to-Text)","Mongo-DB","Pydantic","Uvicorn"],
    demoUrl: "#",
    githubUrl: "https://github.com/jadonvansh2005/AI-Care-Navigator",
  },
  {
    id: 6,
    title: "AI Driven Mineral Trade Intelligence Platform",
    description:
      "AI Driven Mineral Trade Intelligence Platform is a data-driven analytics system designed to analyze, forecast, and assess risks in India's critical mineral trade. The platform integrates statistical analysis, time-series forecasting, and machine learning models to provide policy-grade insights on imports, exports, dependency ratios, risk indices, and state-level mineral value-chain dynamics.",
    image: "/projects/Screenshot 2026-01-20 001849.png",
    tags: [
    "Python",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Statsmodels (ARIMA, SARIMA)",
    "LSTM (Deep Learning)",
    "TensorFlow / Keras",
    "Time Series Forecasting",
    "Statistical Analysis (ANOVA)",
    "Data Engineering",
    "Risk Modeling & Indexing",
    "Policy Analytics",
    "State-Level Mineral Mapping"
  ],
    githubUrl: "https://github.com/jadonvansh2005/AI-Driven-mineral-Trade-Intelligence-Platform",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jadonvansh2005"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
