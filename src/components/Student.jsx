import PropTypes from "prop-types";

const Student = ({ id, email, name, isPresent, onPresenceToggle }) => {
  const handleToggle = () => {
    onPresenceToggle(id);
  };

  return (
    <div className="Student">
      <div className={isPresent ? "green" : "red"}>Nickname: {name}</div>
      <div>Email: {email}</div>
      <button onClick={handleToggle}>
        Toggle if {name} is present
      </button>
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