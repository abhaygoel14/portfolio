import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ProfileImage.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Abhay Goel_Resume_2023Batch.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Abhay Goel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abhay
          <br />
          Goel
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.instagram.com/abhayygoel14/" target="_blank">
            <img src={twitterIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/abhaygoel14" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/abhay-goel14" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about crafting modern web applications for commercial
          businesses, I am a seasoned Software Engineer specializing in frontend
          development and full-stack solutions. My technical expertise and
          relentless drive to innovate make me the perfect partner for your
          project needs.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
