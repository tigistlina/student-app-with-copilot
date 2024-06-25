import './StudentList.css';
import PropTypes from 'prop-types';

const StudentList = (props) => {
  const studentComponents = props.students.map((student, i) => {
    return (
      <li key={i}>
        <div className="Student">Student</div>
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
