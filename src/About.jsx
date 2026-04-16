export default function About() {
  return (
    <div className="about-container">
      <h2 className="title">За Мен</h2>

      <div className="about-split">
        <div className="about-text-side">
          <p className="AboutInfo">
            Здравейте! Аз съм <strong>Божидар Христов</strong> и това е моят проект за Todo App.
          </p>
          <p className="AboutMe">
            Студент съм в Технически университет-София, Специалност:	Компютърно и софтуерно инженерство.
          </p>
        </div>

        <div className="about-image-side">
          <img 
            src="\DSM_5315.jpg" 
            alt="Моя снимка" 
            className="profile-pic" 
          />
        </div>
      </div>

      <div className="about-socials">
        <a href="https://github.com/Boko224" target="_blank" rel="noreferrer" className="link-btn">
          GitHub
        </a>
        <a href="https://linkedin.com/in/твоят-профил" target="_blank" rel="noreferrer" className="link-btn" >
          LinkedIn
        </a>
        <a href="https://todo-app-blond-five-1hrfxopahm.vercel.app/" target="_blank" rel="noreferrer" className="link-btn" >
          Todo App
        </a>
        <a href="https://drive.google.com/file/d/1ob_XMmlQTjSr67j0zEsQCSK5jgHf9Dt7/view?usp=sharing" target="_blank" rel="noreferrer" className="link-btn" >
          CV
        </a>
      </div>

    </div>
  );
}