import React from 'react';

function ResidentsList({residents}) {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{residents.map((resident, index) => (
					<li key={index} className="slide-up-fade-in">{resident.name}</li>
				))}

			</ul>
		</div>
	);
}

export default ResidentsList;