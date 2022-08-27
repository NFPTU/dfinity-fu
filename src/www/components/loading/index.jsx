import React from 'react';
import { GridLoader } from 'react-spinners';
import "./loading.css"

function Loading() {
	return (
		<div className="loading__pageMain">
			<GridLoader color={'#e89f01'} />
		</div>
	);
}

export default Loading;
