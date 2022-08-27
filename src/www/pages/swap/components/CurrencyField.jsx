import React from 'react';
import "./index.css"
const CurrencyField = (props) => {

	return (
		<div className='row currencyInput'>
			<div className='col-md-6 numberContainer'>
				{props.loading ? (
					<div className='spinnerContainer'>
						<props.spinner />
					</div>
				) : (
					<input
						required
						min="0"
						max={props.balance ? props.balance : 0}
						className='currencyInputField'
						placeholder='0'
						type="text"
						value={props.value}
						onKeyDown={(e) =>
							props.field === 'input' ? props.getSwapPrice(e) : null
						}
					/>
				)}
			</div>
			<div className='col-md-6 tokenContainer'>
				<span className='tokenName'>{props.tokenName}</span>
				<div className='balanceContainer'>
					<span className='balanceAmount'>Balance: {props.balance}</span>
				</div>
			</div>
		</div>
	);
};

export default CurrencyField;
