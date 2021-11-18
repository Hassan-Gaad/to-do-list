import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [Text, setText] = useState('');
    

    const onSubmit=(e)=>{
        e.preventDefault();
        if(!Text){
            alert('Please add task name!');
            return
        }
        onAdd({text:Text});

        //clear the form 
        setText('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={Text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
            <input type="submit" name="" id="" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
