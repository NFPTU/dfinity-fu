import React from 'react';
import './popper.css';

function Popper(props) {
	const { children } = props;
	return <div className='container'>{children}</div>;
}

export default Popper;
