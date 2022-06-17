import React, { useState, useEffect } from 'react';
import {
	Btn ,
} from './button.elements';

function Button(props) {
	const { name, sizem, onClick } = props;


	return (
		<>
				<Btn onClick={onClick}>
					{name}
				</Btn>
		</>
	);
}

export default Button;
