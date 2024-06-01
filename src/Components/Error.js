import React from 'react';

function Error({messages}) {
	if (!messages) {
		return null;
	}
	return (
		<div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
			{messages.map((message, index) => (<p key={index}>{message}</p>))}
		</div>
	)
}

export default Error;