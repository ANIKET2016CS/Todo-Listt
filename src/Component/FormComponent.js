import React, { useState } from 'react'

const FormComponent = () => {
    const[inputList, setInputList] = useState("Name");
    const[items, setItems] = useState([]);
    const[dname, setDname] = useState();

    const itemEvent = (e) => {
        //console.log("a");
        setInputList(e.target.value);
    }

    const addName= () => {
        //console.log("Adding name");
        setItems( (name) => {
            return [...name,inputList];
        })
    }

    const deleteName = () => {
        console.log("Deleting Name");
        setDname ((name) => {
            return [...name, setDname]
        })
    }

  return (
    <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={itemEvent}/>
        <button onClick={addName}>Add Name</button>

        <ol> 
            {items.map( (item) => {
                return (
                <>
                    <li>{item}</li>
                    <button onClick={deleteName}>Delete</button>
                </>
                )
            })}
        </ol>

    </div>
  )
}

export default FormComponent