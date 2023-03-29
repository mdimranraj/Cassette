import React, { useState } from 'react';
import "../styles/createArea.css";


const CreateArea = (props) => {

    const [value, setValue] = useState({
        title:"",
        link:""
    })
    function handleChange(event){
        const {name, value} = event.target;
        setValue(prevValue => {
            return{
                ...prevValue,
                [name] : value
            }
        })
    }
    function submitCard(event){
        props.onAdd(value);
        setValue({
            title:"",
            link:""
        })
        event.preventDefault();
    }

  return (
    <form className='create-form'>
        <input onChange={handleChange} type='text' name='title' value={value.title} placeholder='title'></input>
        <input onChange={handleChange} type='url' name='link' value={value.link} placeholder='video/audio link'></input>
        <img onClick={submitCard} src="plus.png" className="plus" alt="plus" />
    </form>
  )
}

export default CreateArea;