import { useState } from "react";


function AddTask({addTask}) {
    const [taskName, setTaskName] = useState("");
    const [taskNotes, setTaskNotes] = useState("");

    function handleClick() {

        addTask(taskName, taskNotes);

        setTaskName("")
        setTaskNotes("")
    }

    return (

        <div>

            <input
            type="text"
            value={taskName}
            placeHolder="Enter task"
            onChange={(event) =>
                setTaskName(event.target.value)
            }
            />

            <br />
            <br />

            <textarea
            placeholder="Task notes"
            value={taskNotes}
            onChange={(event) => setTaskNotes(event.target.value)}
            />

            <br />
            

            <button onClick={handleClick}>Add Task</button>
        </div>
    );
}




export default AddTask;