import React from "react";
import { CohortStartDates } from "./Components/CohortStartDates";
import { Header } from "./Components/Header";
import { StudentList } from "./Components/StudentList";
import { CohortStudentCount } from "./Components/CohortStudentCount";
import data from "./data/data.json";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div>
          <h3>Choose a Class by Start Date</h3>
          <CohortStartDates students={ data }/>
        </div>
        <div>
          <CohortStudentCount />
          <StudentList students={ data }/>
        </div>
      </main>
    </div>
  );
}

export default App;
