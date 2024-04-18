export const CohortStartDates = ( {students} ) => {

    function cohortList( array ) { 
        let arr = array.map( ele => ele.cohort.cohortCode );
        return arr.filter((item, index) => arr.indexOf(item) === index);
    };

    const cohorts = cohortList(students);

    console.log(cohorts);

    return (
        <div>
            <ul>
                <li>
                    <p>All Students</p>
                    <hr/>
                </li>
                { cohorts.map(ele => 
                <li>
                   <p>{ ele } </p>
                   <hr/>
                </li>) }
            </ul>
        </div>
    )
}