import React from 'react'
import Task from './task'

const Tasks = ({tasks,onDelete}) => {

    console.log(tasks);
    return (
        <>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete}/>
    ))}
        </>
    )
}

export default Tasks
