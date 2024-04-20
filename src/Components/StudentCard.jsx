import "./StudentCard.css"



export const StudentCard = ( { student } ) => {

    function buildStudentName(object){
        return `${object.names.preferredName} ${object.names.middleName[0]}. ${object.names.surname}`;
    }

    function formatDate(inputDate) {
        let birthdate = new Date(inputDate);
        
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        let month = months[birthdate.getMonth()];
        let day = birthdate.getDate();
        let year = birthdate.getFullYear();
        
        let formattedDate = `${month} ${day}, ${year}`;
        
        return formattedDate;
    }

    
    return (
        <li>
            <div className="student-card-container">
                <div className="student-profile-container">
                    <div className="profile-photo-container">
                        <img src={ student.profilePhoto } alt="student profile photo"></img>
                    </div>
                    <div className="profile-details-container">
                        <div className="student-info-container">
                            <h3>{ buildStudentName(student) }</h3>
                            <p>{ student.username }</p>
                            <p className="green-text">Birthday: <span>{ formatDate(student.dob) }</span></p>
                        </div>
                        <p className="green-text underlined">Show More...</p>
                        {/* onClick - student-performance-container.style.display === "flex" ? student-performance-container.style.display = "none" */}
                    </div>
                </div>
               
                <div className="student-performance-container">
                    <div className="codewars-list-container">
                        <h3>Codewars:</h3>
                        <ul>
                            <li>
                                <p>Current Total: <span>{ student.codewars.current.total }</span></p>
                            </li>
                            <li>
                                <p>Last Week: <span>{ student.codewars.current.lastWeek }</span></p>
                            </li>
                            <li>
                                <p>Goal: <span>{ student.codewars.goal.total }</span></p>
                            </li>
                            <li>
                                <p>Percent of Goal Achieved: <span>{ Math.round(student.codewars.current.total/student.codewars.goal.total*100) }%</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className="scores-list-container">
                        <h3>Scores</h3>
                            <ul>
                                <li>
                                    <p>Assignments: <span>{ student.cohort.scores.assignments * 100 }%</span></p>
                                </li>
                                <li>
                                    <p>Projects: <span>{ student.cohort.scores.projects * 100 }%</span></p>
                                </li>
                                <li>
                                    <p>Assessments: <span>{ student.cohort.scores.assessments * 100 }%</span></p>
                                </li>
                            </ul>
                    </div>
                    <div className="certs-list-container">
                        <h3>Certifications</h3>
                            <ul>
                                <li>
                                    <p>Resume: <span>{ student.certifications.resume ? "✅" : "❌" }</span></p>
                                </li>
                                <li>
                                    <p>LinkedIn: <span>{ student.certifications.linkedin ? "✅" : "❌" }</span></p>
                                </li>
                                <li>
                                    <p>Mock Interview: <span>{ student.certifications.github ? "✅" : "❌" }</span></p>
                                </li>
                                <li>
                                    <p>GitHub: <span>{ student.certifications.mockInterview ? "✅" : "❌" }</span></p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}