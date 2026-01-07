import ProjectCard from './ProjectCard'
import '../CSS/Projects.css'

const Projects = ({ projects }) => {

  return (
    <section id="Myprojects" className="ProjectsSection">
      <h2 className="ProjectsHeading">Projects</h2>

      <div className="ProjectsContainer">
        {projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default Projects
