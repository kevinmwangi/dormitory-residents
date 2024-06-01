import React, {useState} from 'react';
import ResidentsList from './ResidentsList';
import Search from './Search';
import Error from './Error';

function Main(STUDENTS) {
    const [residents, setResidents] = useState(JSON.parse(localStorage.getItem('residents')) || []);
    const [error, setError] = useState([]);
    const addResidents = (name, date) => {
        const student = STUDENTS.find(student => student.name.toLowerCase() === name.toLowerCase());
        if (!student) {
            setError(`Sorry, ${name} is not a student here` );
        } else if (!validateStudent(date, student.validity)) {
            setError(`Sorry, ${name}'s validity is expired`);
        }else {
            const newResidents = [...residents, ...residents];
            setResidents(newResidents);

            localStorage.setItem('residents', JSON.stringify(newResidents));
        }
    };

    const validateStudent = (joiningDate, validityDate) => {
        const dateNow = new Date();
        const today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        const [year, month, day] = joiningDate.split('_');
        const [yyy, mm, dd] = validityDate.split('_');
        const maxValid = new Date(yyy, mm - 1, dd);
        const selected = new Date(year, month - 1, day);
        return (maxValid >= selected) && (maxValid  >= today);
    };

  return (
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search addResidents={addResidents} />
        <Error messages={error} />
        <ResidentsList residents={residents} />
      </div>
  );
}

export default Main;