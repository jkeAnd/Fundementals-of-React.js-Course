/* first import css class */
import styles from "./Child.module.css"

function Child({title, count}) {
    return (
        <div 
        /* using the css module (styles.box refering to the .box class from child.module.css)*/

        className={styles.box}

        /*using Inline style (javascript) styling*/

        style={{
            backgroundColor: count <= 5 ? "red" : count <= 10 ? "yellow" : "lightgreen"
        }} >
            {/* styling here */}

            <h2>{title}</h2>
            <p> Current count value: {count}</p>

            <p>Combining both inline styles and css modules</p>
        </div>

    );
}

export default Child;
