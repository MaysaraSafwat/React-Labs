import { Link } from "react-router-dom";


export default function StudentList ({ students }) {
    const rows = students.map((student) => (
      <tr key={student.id}>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td><Link to={`/details/${student.id}`}> <button className="action-btn-d">Student Details</button></Link></td>
      </tr>
    ));
  
    return (
        <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      </div>
    );
  };