import PropTypes from 'prop-types';
import Student from './Student';
import './StudentList.css';

const StudentList = ({ students, onStudentPresenceToggle }) => {
  return (
    <div>
      <h2 className='student-list__heading'>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Student
              id={student.id}
              email={student.emailData}
              name={student.nameData}
              isPresent={student.isPresentData}
              onPresenceToggle={onStudentPresenceToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      emailData: PropTypes.string.isRequired,
      nameData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onStudentPresenceToggle: PropTypes.func.isRequired,
};

export default StudentList;
