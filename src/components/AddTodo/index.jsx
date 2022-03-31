
import { useState } from "react";
import "./style.css"

    function AddTodo (props) {

    const [val,setVal] = useState({value: ''})

    const onChange = e => {
        setVal({value: e.target.value})
    }
    
    const onClick = () => {
        if (val.value === '') {
            alert('Please insert a new to do list!');
        } else {
            props.simpan(val.value)
            setVal({value: ''})
        }
    }

        return (
        <div className="form-input">
                <input 
                type="text" 
                placeholder="Add todo..." 
                value={val.value} 
                onChange={(e) => onChange(e)}
                />
                <button type="submit" onClick={onClick} >Submit</button>
        </div>
        ) 
}  

export default AddTodo;