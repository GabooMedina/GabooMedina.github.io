import React, { useState } from "react";

interface TechSkill {
  id: number;
  name: string;
  icon: string; // Ruta relativa al SVG
  category: "frontend" | "backend" | "tools" | "design" | "mobile" | "database";
  proficiency: number;
}

interface CategoryFilter {
  id: string;
  label: string;
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const categoryFilters: CategoryFilter[] = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Tools" },
    { id: "design", label: "Design" },
  ];

  const techSkills: TechSkill[] = [
    // Frontend
    { id: 1, name: "React", icon: "/src/assets/svg/react-original.svg", category: "frontend", proficiency: 5 },
    { id: 2, name: "TypeScript", icon: "/src/assets/svg/typescript-original.svg", category: "frontend", proficiency: 4 },
    { id: 3, name: "JavaScript", icon: "/src/assets/svg/javascript-original.svg", category: "frontend", proficiency: 5 },
    { id: 4, name: "HTML5", icon: "/src/assets/svg/html5-original.svg", category: "frontend", proficiency: 5 },
    { id: 5, name: "CSS3", icon: "/src/assets/svg/css3-original.svg", category: "frontend", proficiency: 4 },
    { id: 6, name: "Tailwind CSS", icon: "/src/assets/svg/tailwindcss-original.svg", category: "frontend", proficiency: 5 },
    { id: 7, name: "Next.js", icon: "/src/assets/svg/nextjs-original.svg", category: "frontend", proficiency: 4 },
    { id: 8, name: "Angular", icon: "/src/assets/svg/angular-original.svg", category: "frontend", proficiency: 4 },

    // Backend
    { id: 9, name: "Java", icon: "/src/assets/svg/java-original.svg", category: "backend", proficiency: 4 },
    { id: 10, name: "PHP", icon: "/src/assets/svg/php-original.svg", category: "backend", proficiency: 4 },
    { id: 11, name: "Python", icon: "/src/assets/svg/python-logo-only.svg", category: "backend", proficiency: 3 },
    { id: 12, name: "Laravel", icon: "/src/assets/svg/laravel-original.svg", category: "backend", proficiency: 3 },
    { id: 13, name: "Spring Boot", icon: "/src/assets/svg/spring-original.svg", category: "backend", proficiency: 4 },
    { id: 14, name: "Node JS", icon: "/src/assets/svg/nodejs-original.svg", category: "backend", proficiency: 4 },
    { id: 15, name: "Nest JS", icon: "/src/assets/svg/nestjs-original.svg", category: "backend", proficiency: 4 },
    { id: 16, name: "Django", icon: "/src/assets/svg/django-plain.svg", category: "backend", proficiency: 4 },

    //Databases
    { id: 17, name: "Mongo DB", icon: "/src/assets/svg/mongodb-original.svg", category: "database", proficiency: 4 },
    { id: 18, name: "MySQL", icon: "/src/assets/svg/mysql-original.svg", category: "database", proficiency: 4 },
    { id: 19, name: "PostgreSQL", icon: "/src/assets/svg/postgresql-original.svg", category: "database", proficiency: 4 },
    { id: 20, name: "FireBase", icon: "/src/assets/svg/firebase-original.svg", category: "database", proficiency: 4 },
    { id: 21, name: "SQLite", icon: "/src/assets/svg/sqlite-original.svg", category: "database", proficiency: 4 },

    // Mobile
    { id: 22, name: "Kotlin", icon: "/src/assets/svg/kotlin-original.svg", category: "mobile", proficiency: 4 },
    { id: 23, name: "Android", icon: "/src/assets/svg/android-original.svg", category: "mobile", proficiency: 4 },
    { id: 24, name: "Ionic", icon: "/src/assets/svg/ionic-original.svg", category: "mobile", proficiency: 4 },
    { id: 25, name: "Dart", icon: "/src/assets/svg/dart-original.svg", category: "mobile", proficiency: 4 },
    { id: 26, name: "Flutter", icon: "/src/assets/svg/flutter-original.svg", category: "mobile", proficiency: 4 },

    // Tools
    { id: 27, name: "Git", icon: "/src/assets/svg/git-original.svg", category: "tools", proficiency: 4 },
    { id: 28, name: "GitHub", icon: "/src/assets/svg/github-original.svg", category: "tools", proficiency: 5 },
    { id: 29, name: "Docker", icon: "/src/assets/svg/docker-original.svg", category: "tools", proficiency: 3 },
    { id: 30, name: "AWS", icon: "/src/assets/svg/amazonwebservices-original-wordmark.svg", category: "tools", proficiency: 3 },
    { id: 31, name: "Azure", icon: "/src/assets/svg/azure-original.svg", category: "tools", proficiency: 3 },
    { id: 32, name: "Linux", icon: "/src/assets/svg/linux-original.svg", category: "tools", proficiency: 3 },
    { id: 33, name: "TensorFlow", icon: "/src/assets/svg/tensorflow-original.svg", category: "tools", proficiency: 3 },
    { id: 34, name: "Keras", icon: "/src/assets/svg/keras-original.svg", category: "tools", proficiency: 3 },
    // Design
    { id: 35, name: "Figma", icon: "/src/assets/svg/figma-original.svg", category: "design", proficiency: 4 },
    { id: 36, name: "Adobe XD", icon: "/src/assets/svg/xd-original.svg", category: "design", proficiency: 3 },
    { id: 37, name: "Photoshop", icon: "/src/assets/svg/photoshop-original.svg", category: "design", proficiency: 3 },
    { id: 38, name: "Illustrator", icon: "/src/assets/svg/illustrator-plain.svg", category: "design", proficiency: 3 },
    { id: 39, name: "Sketch", icon: "/src/assets/svg/sketch-original.svg", category: "design", proficiency: 3 },

  ];

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 300);
  };

  const filteredSkills = techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="tech-stack" className="w-full py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">
            TECHNOLOGIES
          </h2>
          <h1 className="text-5xl font-bold mb-4">
            My Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99]">
              Stack
            </span>
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]" />
          <p className="max-w-2xl mx-auto pt-8 text-gray-300">
            These are the technologies I've worked with. I'm always exploring
            new tools and frameworks to expand my skill set.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-gray-900 font-bold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
          }`}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center bg-gray-800/70 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-[#00ff99] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,153,0.1)]"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full mx-1 ${i < skill.proficiency
                        ? "bg-[#00ff99] shadow-[0_0_5px_rgba(0,255,153,0.7)]"
                        : "bg-gray-600"
                      }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;