import { 
	ADD_ITEM, 
	REMOVE_ITEM, 
	INCREASE_QUANTITY, 
	DECREASE_QUANTITY,
	CLEAR_BUCKET,
	CALCULATE_DISCOUNT
} from "../actions";

export default function reducer(state = [], action) {
	switch(action.type) {
		case ADD_ITEM: return
			
		case REMOVE_ITEM: return;
		
		case INCREASE_QUANTITY:
			return state.map(item => {
				if (item.name == action.name) {
					return Object.assign({}, item, { quantity: item.quantity + 1 })
				}
				return item
			})

		case DECREASE_QUANTITY: return;
		case CLEAR_BUCKET: return; 
		default: return state;
	}
}