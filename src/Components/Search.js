import React, {useState} from 'react';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search({addResidents}) {
	const [name, setName] = useState('');
	const [date, setDate] = useState('');

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" value={date} onChange={(e) => setDate(e.target.value)} />
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={() => { if(addResidents(name, date)) { setName(''); setDate(''); }}}>Add</button>
		</div>
	);
}

export default Search;