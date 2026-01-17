import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "CSS", level: 75, category: "Frontend" },
  { name: "JavaScript", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },

  // Data Science
  { name: "Exploratory Data Analysis (EDA)", level: 70, category: "Data Science" },
  { name: "Pandas & NumPy", level: 75, category: "Data Science" },
  { name: "Matplotlib", level: 65, category: "Data Science" },

  // Machine Learning
  { name: "Scikit-learn", level: 90, category: "Machine Learning" },
  { name: "Regression Algorithms", level: 85, category: "Machine Learning" },
  { name: "Classification Algorithms", level: 90, category: "Machine Learning" },
  { name: "Ensemble learning Algorithms", level: 70, category: "Machine Learning" },
  { name: "Unsupervised learning", level: 70, category: "Machine Learning" },

  // Deep Learning
  { name: "Tensorflow", level: 70, category: "Deep Learning" },
  { name: "Keras", level: 70, category: "Deep Learning" },
  { name: "Pytorch", level: 70, category: "Deep Learning" },
  { name: "Neural Networks", level: 70, category: "Deep Learning" },
  { name: "Transformers", level: 70, category: "Deep Learning" },


  // Gen & Agentic AI 
  { name: "Langchain", level: 70, category: "Gen AI" },
  { name: "LLMs", level: 70, category: "Gen AI" },
  { name: "AI Prompts", level: 70, category: "Gen AI" },
  { name: "RAG Models", level: 70, category: "Gen AI" },
  { name: "Agents", level: 70, category: "Agentic AI" },
  
  
  // Programming Languages
  { name: "C", level: 80, category: "Programming Languages" },
  { name: "C++", level: 75, category: "Programming Languages" },
  { name: "Python", level: 80, category: "Programming Languages" },

  // Database
  { name: "MongoDB", level: 60, category: "Database" },

  // Tools
  { name: "Git & GitHub", level: 70, category: "Tools" },
  { name: "Jupyter Notebook", level: 85, category: "Tools" },
  { name: "Figma (UI basics)", level: 65, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Microsoft Excel", level: 65, category: "Tools" },
];

const categories = [
  "all",
  "Frontend",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Gen AI",
  "Agentic AI",
  "Programming Languages",
  "Database",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
