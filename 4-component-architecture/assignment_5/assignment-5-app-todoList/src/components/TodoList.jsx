import { useState } from "react"
import AddTask from './AddTask'
import TodoItem from "./TodoItem";
function TodoList (){
    const [tasks, setTasks] = useState([]);

    function addTask(taskName, taskNotes) {
        const newTask = {
        
            id: Date.now(),
            title: taskName,
            notes: taskNotes,
            completed: false
        };

        setTasks([
            ...tasks,
            newTask
        ]);
    }

    function deleteTask(id) {

        console.log("Deleting:", id);
        setTasks (
            tasks.filter(
                task => task.id !== id
            )
        );
    
    }
    function toggleCompleted(id) {
        setTasks(
            tasks.map((task) => task.id === id ? { ...task,completed: !task.completed} : task ) 
        );
    }
   return ( 
        <div>
            <h1>Parent Component</h1>

            <AddTask addTask={addTask} />
            
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                     />
                ))}
            </ul>

        </div>
    );
}

export default TodoList;

