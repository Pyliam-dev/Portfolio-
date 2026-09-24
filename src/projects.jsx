import "./projects.css";

const projects = [
    {
        title: "Restaurant Management System",
        description:
            "A web application designed to help restaurants manage their menu, reservations and customer information.",
        technologies: "HTML, CSS, JavaScript, PHP and MySQL",
        image: `${import.meta.env.BASE_URL}restaurant-project.jpg`
    },

    {
        title: "ESTLC School Website",
        description:
            "A school website concept designed to present ESTLC, its academic programs and provide students with access to their accounts.",
        technologies: "HTML, CSS, JavaScript, PHP and MySQL",
        image: `${import.meta.env.BASE_URL}school.png`
    },

    {
        title: "My Portfolio",
        description:
            "A personal portfolio website showcasing my skills, projects and experience.",
        technologies: "React, JavaScript, HTML and CSS",
        image: `${import.meta.env.BASE_URL}portfolio-project.jpg`
    }
];

function Projects() {
    return (
        <section className="projects" id="projects">

            <h2>My Projects</h2>

            <div className="project-container">

                {projects.map((project) => (
                    <div className="project-card" key={project.title}>

                        <img
                            src={project.image}
                            alt={project.title}
                        />

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <p className="technologies">
                                <strong>Technologies:</strong>{" "}
                                {project.technologies}
                            </p>

                            <div className="project-buttons">
                                <a href="#">Live Demo</a>
                                <a href="#">GitHub</a>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;