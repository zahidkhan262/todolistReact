import React from 'react'
import List from './List'
import { useState } from 'react';
import { toast } from "react-toastify";

const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addBtn = () => {
        todoList.push({ description: inputData });
        setTodoList(todoList)
        setInputData('')
        toast('Add List Successfully')

    }
    const deleteTask = (index) => {
        const newList = todoList.filter((item, i) => i !== index);
        setTodoList(newList)

        toast.error('Deleted')
    }

    return (
        <>
            <div className="container">
                <div className="todo_box">
                    <h2>Todo List</h2>
                    <div className="box d-flex">


                        <input type="text"
                            className="input"
                            placeholder="Enter a task here....."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />

                        <img src="plus.png" alt="add_btn" onClick={addBtn} />

                    </div>
                    {todoList.length ? todoList.map((val, index) => <List val={val} index={index} deleteTask={deleteTask} />)
                        : <h2> 🚫 No task here...</h2>
                    }


                </div>
            </div>

        </>
    )
}

export default TodoList
