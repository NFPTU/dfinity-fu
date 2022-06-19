import React, { useState, useEffect } from 'react';
import {
	Btn ,
} from './button.elements';

function Button(props) {
	const { name, sizem, onClick, disabled, children } = props;


	return (
		<>
				<Btn disabled={disabled} onClick={onClick}>
					{name||children}
				</Btn>
		</>
	);
}

export default Button;
