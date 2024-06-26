import { useState } from 'react';
import PropTypes from 'prop-types';
import './Student.css'; 

const Student = ({ name, initialIsPresent, id, email }) => { // Assuming id and email are part of the details
  const [isPresent, setIsPresent] = useState(initialIsPresent);

  const handleToggle = () => {
    setIsPresent(!isPresent);
  };

  // Determine the class based on `isPresent`
  const studentClass = isPresent ? 'Student-green' : 'Student-red';

  return (
  <div>
    <p className={studentClass}>Name: {name}</p> {/* Apply the class here */}
    <p>ID: {id}</p> {/* Keep other details unchanged */}
    <p>Email: {email}</p>
    <button onClick={handleToggle}>Toggle Presence</button>
  </div>
);
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  initialIsPresent: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;