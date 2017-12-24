export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const CLEAR_BUCKET = "CLEAR_BUCKET";

export function removeItem(name) {
	return {
		type: REMOVE_ITEM,
		name
	}
}

export function increaseQuantity(name) {
	return {
		type: INCREASE_QUANTITY,
		name
	}
}

export function decreaseQuantity(name) {
	return {
		type: DECREASE_QUANTITY,
		name
	}
}

export function clearBucket() {
	return {
		type: CLEAR_BUCKET
	}
}