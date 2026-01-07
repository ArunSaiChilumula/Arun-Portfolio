import "../CSS/Skills.css"
const Skills = ({ data }) => {
  return (
    <div>
      <section id="skills" className="SkillsSection">
        <h2 className="SkillsHeading">Tech Stack</h2>
        <div className="SkillsContainer">
          {data && Object.entries(data).map(([skill, icon], index) => (
            <div key={index} className="SkillCard">
              <p className="SkillName">{skill}</p>
              <img src={icon} alt={skill} className="SkillIcon" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
