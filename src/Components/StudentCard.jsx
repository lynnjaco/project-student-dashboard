export const StudentCard = ( { student } ) => {

    function buildStudentName(object){
        return `${object.names.preferredName} ${object.names.middleName[0]}. ${object.names.surname}`;
    }

    return (
        <li>
            <div>
                <img src={ student.profilePhoto } alt="student profile photo"></img>
            </div>
            <div>
                <div>
                    <h3>{ buildStudentName(student) }</h3>
                    <p>{ student.username }</p>
                    <p>Birthday: <span>{ student.dob }</span></p>
                </div>
                <p>Show More...</p>
            </div>
        </li>
    )
}