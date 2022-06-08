import React, { useState, useEffect } from 'react';
import {
	ButtonCl ,
} from './button.elements';

function Button(props) {
	const { name, sizem, onClick } = props;


	return (
		<>
				<ButtonCl onClick={onClick}>
					{name}
				</ButtonCl>
		</>
	);
}

export default Button;
