import React from 'react';

const Square = ({ value, onClick, status }) => {
	return (
		<button onClick={onClick} className={status && 'active'}>
			{value}
		</button>
	);
};

export default Square;
