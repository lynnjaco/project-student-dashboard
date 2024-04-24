import { useState } from "react";
import data from "../data/data.json";
import { v4 as uuidv4 } from 'uuid';


export const CohortStartDates = ( {students, setStudentList} ) => {

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

    const cohorts = cohortList( data );


    function filterStudentsArray(array, cohortDateString){
        return array.filter((student) => student.cohort.cohortCode === cohortDateString)
    }

    return (
        <div>
            <ul>
                <li key={ uuidv4() } >
                    <p onClick={ () => {setStudentList(data)}}>All Students</p>
                    <hr/>
                </li>
                { cohorts.map(ele => (
                    <li key={ uuidv4() }>
                        <p onClick={ () => {
                            setStudentList(filterStudentsArray(students, ele));
                             }
                        }> { addSpaceBeforeIndex(ele) } </p>
                        <hr/>
                    </li>)
                )}
            </ul>
        </div>
    )
}