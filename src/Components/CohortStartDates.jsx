export const CohortStartDates = ( {students} ) => {

    function cohortList(array) { 
        let arr = array.map( ele => ele.cohort.cohortCode );
        return arr.filter((item, index) => arr.indexOf(item) === index);
    };

    function addSpaceBeforeIndex(string) {
        let findFirstNumberIndex = (str) => {
            return str.search(/\d/);
        }
        let index = findFirstNumberIndex(string);

        return `${string.slice(0, index)} ${string.slice(index)}`;
    }

    const cohorts = cohortList(students);

    return (
        <div>
            <ul>
                <li>
                    <p>All Students</p>
                    <hr/>
                </li>
                { cohorts.map(ele => 
                <li>
                   <p>{ addSpaceBeforeIndex(ele) } </p>
                   <hr/>
                </li>) }
            </ul>
        </div>
    )
}