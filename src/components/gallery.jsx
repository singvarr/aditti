import React, {Component} from 'react';
import Item from './item.jsx';

class Gallery extends Component {
	render() {
		return (
			<section className="gallery">
				<h2>
					<div className="wrapper">featured items</div>	
				</h2>
				<div className="items wrapper clearfix">{
					this.props.items.map((item, index) => {
						return <Item
							key={index}
							category={item.category}
							src={item.src}
							price={item.price}
							quantity={item.quantity}
							onAdd={this.props.onAdd}
							name={item.name}
						/>
					})
				}
				</div>
			</section>
		)
	}
}

export default Gallery;