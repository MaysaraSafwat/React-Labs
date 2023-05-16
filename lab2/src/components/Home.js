import Register from "./Registeration";
import StudentList from "./StudentsList";
export default function Home({AddStudent,students}){
   

    return(
        <di>
            <Register students={students} addStudents={AddStudent}/>
            <StudentList students={students}/>
        </di>
    )
}