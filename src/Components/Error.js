import React from 'react';

function Error({message}) {
	if (!message || message.length === 0) {
		return null;
	}

	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{message}</div>
}

export default Error;