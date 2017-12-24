import React, {Component} from 'react'; 
import ReactModal from 'react-modal';

class Bucket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	getTotalSum() { 
		return this.props.items.reduce((prev, next) => {
			return prev + next.price * next.quantity
		}, 0)
	};

	getTotalQuantity() { 
		return this.props.items.reduce((prev, next) => {
			return prev + next.quantity
		}, 0);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	render() {
		let EMPTY_BUCKET = [
			<h2 className="dialog-header" key={1}>Your bucket is empty</h2>,
			<button key={2} onClick={() => this.handleCloseModal()}></button>
		];

		let FULL_BUCKET = <div>
			<h2 className="dialog-header">Your bucket</h2>
			{this.props.items.map((item, index) => {
				if (item.quantity) {
					return (
						<div className="dialog-content" key={index}>
							<div className="item-controls">
								<button onClick={() => this.props.onRemoveItem(item.name)}>Remove</button>
								<button onClick={() => this.props.onDecreaseQuantity(item.name)}>Decrease</button>
								<img src={item.src} alt={item.name} />
								<button onClick={() => this.props.onIncreaseQuantity(item.name)}>Increase</button>
							</div>
							<div className="item-name">{item.name}</div>
							<div className="item-total">
								<span>{item.quantity}</span>
								<span>{item.quantity * item.price}</span>
							</div>
						</div>
					)
				}
			})}
			<div className="dialog-footer">
				<span>Your total sum is ${this.getTotalSum()}</span>
				<button onClick={() => this.handleCloseModal()}>Return to items</button>
				<button onClick={() => {
					this.props.onClearBucket();
					this.handleCloseModal();
				}}>Clear bucket</button>
				<button onClick={() => this.handleCloseModal()}>Close Modal</button>
			</div>
		</div>

		return (
			<div className='bucket'>
				<button id='open-bucket' onClick={() => this.handleOpenModal()}/>
				<div className='total-sum'>
					{this.getTotalSum()}
					<span className='total-quantity'>{this.getTotalQuantity()}</span>
				</div>
				<ReactModal isOpen={this.state.showModal} contentLabel="Bucket Modal">
					{this.getTotalQuantity() ? FULL_BUCKET : EMPTY_BUCKET}
				</ReactModal>
			</div>
		)	
	}
}

export default Bucket;