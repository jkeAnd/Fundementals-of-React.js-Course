import styles from "./About.module.css";
import about_me from "../assets/about_me.jpg";
function About(){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>About Me</h2>
            <img src={about_me}
            alt ="Mountain landscape"
            className={styles.aboutImage}/>
            <p className={styles.text}>I am a father of two young children. 
                
                I am currently studying Software Development at Karelia University of Applies Sciences.</p>

            <p className={styles.text}>
                Before transitioning into software development, I worked as a chef in high-end restaurants. Working in fast-paced kitchen environments taught me the value of teamwork, clear communication, organisation, and solving problems under pressure. I also gained experience leading small teams and maintaining high standards in demanding situation
            </p>

            <p className={styles.text}>
                Outside of family life and studies, I am passionate about the outdoors. I enjoy rock climbing, running, swimming, and cycling, volunteer as a climbing coach, and serve on the board of directors of the Joensuu Climbing Club.
            </p>

            <ul className={styles.skills}>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Logical Thinking</li>
                <li>Team Work</li>
            </ul>
        
        </div>
    );
}

export default About;