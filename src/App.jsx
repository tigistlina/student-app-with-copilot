import { useEffect, useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import NewStudentForm from './components/NewStudentForm';
import PropTypes from 'prop-types';

function App({ dataProvider }) {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    (async () => {
      let students = await dataProvider.getData();
      setStudentData(students);
    })();
  }, [dataProvider]);

  const addStudentData = (newStudent) => {
    // Logic to generate the next valid student ID
    const nextId = Math.max(0, ...studentData.map((student) => student.id)) + 1;

    // Duplicate the student list
    const newStudentList = [...studentData];

    newStudentList.push({
      id: nextId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });

    setStudentData(newStudentList);
  };

  const toggleStudentPresence = (studentId) => {
    // calculate the updated student data by finding the student that matches
    // the passed id, making a copy with object spreading, then overwriting
    // the presence value with its inverse
    const students = studentData.map(student => {
      if (student.id === studentId) {
        // this was the toggled student, so make a new record with the updated
        // presence value
        return { ...student, isPresentData: !student.isPresentData };
      } else {
        // this was not the student who was toggled, so we can use the existing
        // data in the new student array
        return student;
      }
    });

    // uses value-passing style to update the student data, but could be
    // refactored to use function-passing style
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
      <NewStudentForm onStudentAdd={addStudentData}></NewStudentForm>
    </main>
  );
}

App.propTypes = {
  dataProvider: PropTypes.shape({
    getData: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
