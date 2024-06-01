import React, {useState} from 'react';
import ResidentsList from './ResidentsList';
import Search from './Search';
import Error from './Error';

function Main(STUDENTS) {
    const [residents, setResidents] = useState('');
    const [error, setError] = useState([]);
    const addResidents = (name, date) => {
        const student = STUDENTS.find(student => student.name.toLowerCase() === name.toLowerCase());
        if (!student) {
            setError(`Sorry, ${name} is not a student here` );
        } else if (!validStudent(date, student.validity)) {
            setError(`Sorry, ${name}'s validity is expired`);
        }else {
            setResidents([...residents, name]);
        }
    };

  return (
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search addResidents={addResidents} />
        <Error message={error} />
        <ResidentsList residents={residents} />
      </div>
  );
}

export default Main;