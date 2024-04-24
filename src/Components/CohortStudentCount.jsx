import "./CohortStudentCount.css"

export const CohortStudentCount = ( { students } ) => {
    return (
        <div className="cohort-student-count-container">
            <h2>All Students</h2>
            <p>Total Students: <span className="green-text">{ students.length }</span></p>
        </div>
    )
}