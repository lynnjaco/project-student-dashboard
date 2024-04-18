import "./StudentCard.css"

export const StudentCard = ( { student } ) => {

    function buildStudentName(object){
        return `${object.names.preferredName} ${object.names.middleName[0]}. ${object.names.surname}`;
    }

    return (
        <li>
            <div className="student-profile-container">
                <div className="profile-photo-container">
                    <img src={ student.profilePhoto } alt="student profile photo"></img>
                </div>
                <div className="profile-details-container">
                    <div className="student-info-container">
                        <h3>{ buildStudentName(student) }</h3>
                        <p>{ student.username }</p>
                        <p className="green-text">Birthday: <span>{ student.dob }</span></p>
                    </div>
                    <p className="green-text underlined">Show More...</p>
                </div>
            </div>
        </li>
    )
}