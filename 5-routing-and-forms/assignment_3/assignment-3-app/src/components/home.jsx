import portrait from "../assets/portrait.jpeg";
import styles from "./Home.module.css";

function Home(){
    return(
        <div className={styles.container}>
            <img src={portrait} alt="Portrait" className={styles.profileImage}></img>
            <h2 style={{color:'black'}}>Home</h2>
            <h1 className={styles.title}>Hi, I am Jake Anderson.  </h1>
            <p className={styles.text}>Father of two, Aspiring software developer, and Outdoor enthusiast.</p>
            <p className={styles.text}>I am currently studying software development while balancing family life.</p>
            <p className={styles.text}>My goal is to build technology that helps families and young people without replacing genuine human connection.</p>
        </div>
    );
}

export default Home;