import React from 'react';

function Item(props) {
	return (
		<div className="item">
			<figure><img
				src={props.src}
				alt={props.name}/>
			</figure>
			<figcaption>
				<span className="title">{props.name}</span>
				<span className="price">$ {props.price}</span>
				<button 
					name="buy"
					value={props.price}
					onClick={() => props.onAdd(props.name)}>Buy now
				</button>
			</figcaption>
		</div>
	)
}

export default Item;