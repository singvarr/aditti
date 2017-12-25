import { 
	REMOVE_ITEM, 
	INCREASE_QUANTITY, 
	DECREASE_QUANTITY,
	CLEAR_BUCKET,
} from "../actions";

export default function reducer(state = [], action) {
	const index = state.findIndex(item => item.name == action.name);

	switch(action.type) {
		case REMOVE_ITEM: 
			state[index].quantity = 0;
			break;
		
		case INCREASE_QUANTITY:
			state[index].quantity += 1;
			break;

		case DECREASE_QUANTITY: 
			state[index].quantity -= 1;
			break;
		
		case CLEAR_BUCKET: return state.map(item => Object.assign({}, item, {quantity: 0}));

		default: return state;
	}

	return [...state.slice(0, index), state[index], ...state.slice(index + 1)];
}