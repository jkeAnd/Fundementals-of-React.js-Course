import styles from "./Contact.module.css";
function Contact(){
    return (
        
        <div className={styles.container}>
            <h2 className={styles.title}> Get In Touch</h2>
            <p className={styles.text}>If you'd like to connect, discuss software development, or simply share ideas,
  feel free to get in touch.</p>
            

            <div className={styles.terminal}>

           <p> 
            &gt; {" "} <a
            href="mailto:jake.anderson@edu.karelia.fi"
            className={styles.link} 
            >
                jake.anderson@edu.karelia.fi
            </a>
           </p> 

           <p>
            &gt;{" "}
            <a
            href="http://github.com/jkeAnd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            >github. </a>
            </p>
      
            </div>
            </div>
            

        

    
        
    );
}

export default Contact;