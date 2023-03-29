import React, {useState} from 'react'
import "../styles/createBucket.css";

const CreateBucket = (props) => {

    const [value, setValue] = useState({
        title:""
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
    function submitBucket(event){
        props.onAdd(value);
        setValue({
            title:""
        })
        event.preventDefault();
    }
    

  return (
    <form className='create-bucket-form'>
        <input onChange={handleChange} type='text' name='title' value={value.title} placeholder='title'></input>
        <button onClick={submitBucket} type="button" class="btn btn-success">Create Bucket</button>

        
    </form>
  )
}

export default CreateBucket;