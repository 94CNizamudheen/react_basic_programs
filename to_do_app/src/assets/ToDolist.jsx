import React, { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([
        { text: "Eat Breakfast", compleated: false }
    ]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const [error, setError] = useState("")



    function addTask() {
        if (newTask.trim() === "") {
            setError("Task cannot be empty")
            return
        }
        if (tasks.some(task => task.text.toLowerCase() === newTask.toLowerCase())) {
            setError("Task Already exists");
            return;
        }
        setTasks(t => [...t, { text: newTask, compleated: false }]);
        setNewTask('');
        setError('')

    };
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)

    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    };

    function toggleCompleate(index) {
        const updatedTasks = tasks.map((task, i) => i === index ? { ...task, compleated: !task.compleated } : task);
        setTasks(updatedTasks);
    };

    function startEditing(index) {
        setEditingIndex(index);
        setEditText(tasks[index].text)
    };

    function saveEdit(index) {
        if (editText.trim() == "") {
            setError("Task cannot be empty")
            return
        }
        if(tasks.some((task,i)=>i!==index && task.text.toLowerCase()===editText.toLowerCase())){
            setError("Task Already exists");
            return
        }
        const updatedTasks=tasks.map((task,i)=> i===index ? {...task,text:editText} : task );
        setTasks(updatedTasks);
        setError('');
        setEditingIndex(null);
        setEditText('');
    };



    return (
        <div className="to-do-list">
            <h1 >To-Do-List</h1>
            <div>
                <input
                    type="text" placeholder="Enter your Task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} />
                <button className="add-button" onClick={addTask} >Add</button>
            </div>
            {error && <p style={{color:"red"}} >{error}</p> }
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <input type="checkbox" className="check-box" checked={task.compleated} onChange={() => toggleCompleate(index)} />
                        {editingIndex === index ? (
                            <>
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <button className="save-button" onClick={() => saveEdit(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span className="text" style={{ textDecoration: task.compleated ? 'line-through' : 'none' }}>{task.text}</span>
                                <button className="edit-button" onClick={() => startEditing(index)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="up-button" onClick={() => moveTaskUp(index)}>Up ⬆ </button>
                                <button className="down-button" onClick={() => moveTaskDown(index)}>Down ⬇ </button>
                            </>
                        )}

                    </li>
                )}
            </ol>
        </div>
    )
};
export default ToDoList