import { CohortStartDates } from "./Components/CohortStartDates";
import { Header } from "./Components/Header";
import { StudentList } from "./Components/StudentList";
import data from "./data/data.json"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div>
          <CohortStartDates />
        </div>
        <div>
          <CohortStudentCount />
          <StudentList />
        </div>
      </main>
    </div>
  );
}

export default App;
