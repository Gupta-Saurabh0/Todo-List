import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
export default function App() {
  const[inputData,setInputData]=useState(" ")
  const[Items,setItems]=useState([])

  const itemEvent=(event)=>{
    setInputData(event.target.value)
  }
  const listOfItems=()=>{
      setItems((oldItems)=>{
        return [...oldItems,inputData]
      })
      setInputData("")
  }

  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((item,index)=>{
        return id!==index
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add a item" value={inputData} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {Items.map((item,index)=>{
              return<TodoList text={item} key={index} id={index} onSelect={deleteItem}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
