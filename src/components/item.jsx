import React, {Component} from 'react';

class Item extends Component {
	render() {
		return (
			<div className="item">
				<figure><img
					src={this.props.src}
					alt={this.props.name}/>
				</figure>
				<figcaption>
					<span className="title">{this.props.name}</span>
					<span className="price">$ {this.props.price}</span>
					<button 
						name="buy"
						value={this.props.price}
						onClick={() => this.props.onAdd(this.props.name)}
					>Buy now</button>
				</figcaption>
			</div>
		)
	}
}

export default Item;