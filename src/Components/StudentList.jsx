import { StudentCard } from "./StudentCard"

export const StudentList = ( students ) => {
    return (
        <>
            <ul>
                { students.map( ele => <StudentCard student={ ele }/> ) }
            </ul>
        </>
    )
}