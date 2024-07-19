import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.jpg";
import hipsster from "../../assets/autodriver.jpg";
import fitLift from "../../assets/Flix.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/abhaygoel14/IndiaGhumoChat"
          h3="India Ghumo Chat"
          p="Build a nationwide network"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/abhaygoel14/Food-Delivery-Web-App"
          h3="Khana Khazana"
          p="Realtime Food Delivery Web App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/abhaygoel14/NammaYatri-Web-App"
          h3="Namma Yatri"
          p="Book your travel"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/abhaygoel14/netflix-gpt"
          h3="FlixxGpt"
          p="Streaming App : Coming soon!"
        />
      </div>
    </section>
  );
}

export default Projects;
