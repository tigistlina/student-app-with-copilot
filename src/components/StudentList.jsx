import './StudentList.css';
import PropTypes from 'prop-types';
import Student from './Student.jsx';

const StudentList = (props) => {
  const studentComponents = props.students.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onStudentPresenceToggle={props.onStudentPresenceToggle}
        />
      </li>
    );
  });

  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul>{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool.isRequired,
    })
  ),
  onStudentPresenceToggle: PropTypes.func.isRequired,
};

export default StudentList;
