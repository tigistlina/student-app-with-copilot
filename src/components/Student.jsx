
import PropTypes from 'prop-types';
import './Student.css';

const Student = ({ id, email, name, isPresent, onPresenceToggle }) => {
  const handleTogglePresence = () => {
    onPresenceToggle(id);
  };

  return (
    <div className={`Student ${isPresent ? 'present' : 'absent'}`}  data-student-id={id}>
      <div className={`nickname ${isPresent ? 'present' : 'absent'}`}>Nickname: <span>{name}</span></div>
      <div>Email: {email}</div>
      <button onClick={handleTogglePresence}>Toggle if {name} is present</button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onPresenceToggle: PropTypes.func.isRequired,
};

export default Student;
