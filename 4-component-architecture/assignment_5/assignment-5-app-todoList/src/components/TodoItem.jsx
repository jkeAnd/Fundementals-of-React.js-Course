import styles from '../styles/TodoItem.module.css';
function TodoItem({task, deleteTask, toggleCompleted}) {
    console.log(task);

    return ( 
        

        <div  className={styles.box}>   
        
                    

            <h3 className={styles.title}
            style={{
                textDecoration:
                task.completed ?"line-through" : "none"
            }}
            >{task.title}</h3>

            <hr />
            <p
                style={{
                    textDecoration: 
                    task.completed ?"line-through": "none"
                }}
            >{task.notes}</p>
            <button onClick={() => {
                console.log("Delete clicked");
                deleteTask(task.id)}}>Delete </button>
            <button
            onClick={() => toggleCompleted(task.id)}>
                {task.completed ? "Undo":"Complete"}</button>
        </div>
    );
}

export default TodoItem;