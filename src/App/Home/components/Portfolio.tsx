import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "ia" | "other";
  technologies: string[];
  link: string;
  github?: string;
  featured: boolean;
}

interface CategoryFilter {
  id: string;
  label: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("web");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categoryFilters: CategoryFilter[] = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ia", label: "IA" },
    { id: "other", label: "Other Projects" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "SaaS VetControl",
      description:
        "A comprehensive admin dashboard for online stores with real-time analytics and inventory management.",
      image: "/src/assets/projects/sasVetControl.png",
      category: "web",
      technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
      link: "https://example.com/project1",
      github: "https://github.com/GabooMedina/VetControl-Frontend",
      featured: true,
    },
    {
      id: 2,
      title: "Cracks App",
      description:
        "Mobile app for managing football tournaments, featuring team and player administration, match calendar, real-time results, standings tables, and push notifications",
      image: "/src/assets/projects/cracksMovil.png",
      category: "mobile",
      technologies: ["Ionic", "Firebase", "Typescript"],
      link: "https://example.com/project2",
      github: "https://github.com/GabooMedina/Cracks-AppMovil",
      featured: true,
    },
    {
      id: 3,
      title: "Junta de Agua Potable Santa Rosa",
      description:
        "Web system for managing water billing and administration for the Santa Rosa Water Board, including clients, invoices, consumption, branches, and users.",
      image: "/src/assets/projects/junta-agua.png",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      link: "https://junta-de-agua.vercel.app/login",
      github: "https://github.com/GabooMedina/Junta-de-Agua",
      featured: true,
    },
    {
      id: 4,
      title: "Celula Académica FISEI",
      description:
        "Educational platform for FISEI-UTA featuring event registration, activity calendar, event information, event management, and faculty news updates.",
      image: "/src/assets/projects/celulaAcademica.png",
      category: "web",
      technologies: ["React", "JavaScript", "Django", "PostgreSQL", "Tailwind CSS"],
      link: "https://front-celula-academica.vercel.app/",
      github: "https://github.com/GabooMedina/Celula-Academica",
      featured: false,
    },
    {
      id: 5,
      title: "EcuaBus App",
      description:
        "Mobile solution for managing bus routes, drivers, and ticket sales in transport cooperatives. It integrates a centralized server with an APK-based app for admins, staff, and passengers.",
      image: "/src/assets/projects/ecuabus.png",
      category: "mobile",
      technologies: ["Ionic", "Typescript", "Firebase"],
      link: "",
      github: "https://github.com/GabooMedina/EcuaBus",
      featured: false,
    },
    {
      id: 6,
      title: "Aplicación Administrativa FITME",
      description:
        "Web nutritional analysis system that enables detailed tracking of calorie intake, statistical reports by day/week/month/year, progress and trend visualization, and personalized alerts based on goals.",
      image: "/src/assets/projects/fitme.png",
      category: "web",
      technologies: ["PHP", "Bootsrap", "MySQL", "HTML", "CSS"],
      link: "https://example.com/project1",
      github: "https://github.com/GabooMedina/Fitme",
      featured: true,
    },
    {
      id: 6,
      title: "BusGo",
      description:
        "BusGo is a desktop application for bus terminals that enables digital ticket sales, route and schedule management, seat availability control, and daily reporting.",
      image: "/src/assets/projects/busGo.png",
      category: "other",
      technologies: ["Java","MySQL"],
      link: "https://example.com/project1",
      github: "https://github.com/GabooMedina/Software-Boletos",
      featured: false,
    },
    {
      id: 7,
      title: "PetVision",
      description:
        "Real-time dog and cat image classifier using TensorFlow.js, fully running in the browser. Just point your phone camera at a pet (real or photo), powered by a model trained in Python with TensorFlow",
      image: "/src/assets/projects/petVision.png",
      category: "ia",
      technologies: ["Python","TensorFlow", "OpenCV"],
      link: "https://ringa-tech.com/exportacion/perros-gatos/",
      github: "https://github.com/GabooMedina/petVision",
      featured: false,
    },
  ];

  const handleFilterChange = (filter: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 300);
  };

  const openImageModal = (imageUrl: string, title: string) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = 'auto';
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl font-bold text-gray-400 mb-2"
          >
            MY WORK
          </h2>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-[#00ff99] mx-auto shadow-[0_0_10px_rgba(0,255,153,0.7)]"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className=" max-w-2xl mx-auto"
          >
            A selection of my recent projects showcasing my skills in web
            development, mobile applications, and Artificial Intelligence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer 
                ${activeFilter === filter.id
                  ? "bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22]"
                  : "bg-gray-800 text-gray-300 hover:bg-[#00ff99] hover:text-[#1c1c22]"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
            }`}
        >
          {filteredProjects.map((project) => (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-[#00ff99] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="relative overflow-hidden aspect-video cursor-pointer"
                onClick={() => openImageModal(project.image, project.title)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] text-xs px-2 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-[#00ff99] via-[#00dd99] to-[#00cc99] text-[#1c1c22] px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#00ff99] text-[#1c1c22] text-sm font-medium rounded-md hover:bg-transparent hover:border hover:border-[#00ff99] hover:text-[#00ff99] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-[#00ff99] text-[#00ff99] text-sm font-medium rounded-md hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00ff99]/50 active:shadow-[#00ff99]/70 hover:scale-105"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom indicator */}
              <div
                className={`h-1 bg-[#00ff99] transition-all duration-300 ${hoveredProject === project.id ? "w-full" : "w-0"
                  }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#00ff99] text-4xl transition-colors duration-300"
              onClick={closeImageModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-[#00ff99]">{selectedTitle}</h3>
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage}
                alt={`Imagen ampliada de ${selectedTitle}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;