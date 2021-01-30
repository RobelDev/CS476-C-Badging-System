const kudosReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_KUDOS':
			return state + 1
		case 'DECREMENT_KUDOS':
			return state - 1
		default:
			return state
	}
};

export default kudosReducer;