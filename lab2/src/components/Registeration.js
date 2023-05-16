

export default function Register({students, addStudents}){
    

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(e.target[0].value , e.target[1].value)
        let s = {
            id: students.length + 1,
            name : e.target[0].value ,
            age : e.target[1].value
        }
        addStudents(s);

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name: </label>
                  <input type="text"/>
                </div>
                <div className="form-group">
                  <label>Age: </label>
                  <input type="text"/>
                </div>
                 <button type="submit">Add</button>
                
            </form>
        </div>
    )
}