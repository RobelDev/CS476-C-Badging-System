const badgeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_BADGE':
            return state
        default:
            return state
    }
};

export default badgeReducer;