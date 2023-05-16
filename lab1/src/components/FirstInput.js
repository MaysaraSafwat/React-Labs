import { useState } from "react"

export default function Input(){
    const [text, setText] = useState(" ")

    const handleChange =(e)=>{
        setText(e.target.value);
    }
    return(
        <div>
            <h2>Dynamic Input</h2>
            <form>
                <label>Enter a Name: </label>
                <input className="d-input" type="text" onChange={handleChange}/>
            </form>
            <span>{text}</span>
            
        </div>
    )
}