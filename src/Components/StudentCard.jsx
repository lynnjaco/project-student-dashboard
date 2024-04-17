export const StudentCard = (props) => {

    function buildStudentName(object){
        return `${object.names.preferredName} ${object.names.middleName[0]} ${object.names.surname}`;
    }

    return (
        <div>
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
        </div>
    )
}