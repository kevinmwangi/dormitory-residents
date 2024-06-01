import React from 'react';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search() {
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0">Add</button>
		</div>
	);
}

export default Search;