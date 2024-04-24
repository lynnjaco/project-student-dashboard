import React from "react";
import { useState } from "react";
import { CohortStartDates } from "./Components/CohortStartDates";
import { Header } from "./Components/Header";
import { StudentList } from "./Components/StudentList";
import { CohortStudentCount } from "./Components/CohortStudentCount";
import data from "./data/data.json";

function App() {
  let [studentList, setStudentList ] = useState( data )

  return (
    <div>
      <header className="dashboard-header">
        <Header />
      </header>
      <main>
        <div className="cohorts-container">
          <h2>Choose a Class by Start Date</h2>
          <CohortStartDates
            students={ data }
            setStudentList={ setStudentList } />
        </div>
        <div className="students-container">
          <CohortStudentCount students={ studentList } />
          <StudentList
            students={ studentList } />
        </div>
      </main>
    </div>
  );
}

export default App;
