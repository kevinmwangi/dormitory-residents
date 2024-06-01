import React, {useState} from 'react';
import ResidentsList from './ResidentsList';
import Search from './Search';
import Error from './Error';

function Main({STUDENTS}) {
    const [residents, setResidents] = useState(JSON.parse(localStorage.getItem('residents')) || []);
    const [error, setError] = useState([]);
    const addResidents = (name, date) => {
        const student = STUDENTS.find(student => student.name.toLowerCase() === name.toLowerCase());

        if (!name || !date) {
            setError('Please enter all the fields');
        } else if (!student) {
            setError(`Sorry, ${name} is not a verified student!` );
            return true;
        } else if (residents.some(resident => resident.name === name)) {
            setError([`Sorry, ${name} is already present in the residents list!`]);
            return true;
        } else if (!validateStudent(date, student.validity)) {
            setError(`Sorry, ${name}'s validity has Expired!`);
            return true;
        }else {
            const newResidents = [...residents, {name}];
            setResidents(newResidents);
            setError(null);
            localStorage.setItem('residents', JSON.stringify(newResidents));
            return true;
        }
    };

    const validateStudent = (joiningDate, validityDate) => {
        const joiningDateObj = new Date(joiningDate);
        const validityDateObj = new Date(validityDate);
        return validityDateObj >= joiningDateObj;
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