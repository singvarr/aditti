import React, {Component} from 'react';

function Bucket(props) {
	const totalSum = props.items.reduce((prev, next) => {
		return prev + next.price * next.quantity
	}, 0);

	const totalQuantity = props.items.reduce((prev, next) => {
		return prev + next.quantity
	}, 0);

	return (
		<div className='bucket'>
			<button id='open-bucket'/>
			<div className='total-sum'>${totalSum}
				<span className='total-quantity'>{totalQuantity}</span>
			</div>	
		</div>
	)
}

export default Bucket;