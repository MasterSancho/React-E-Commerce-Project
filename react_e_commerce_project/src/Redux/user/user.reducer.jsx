const INITIAL_STATE = {
    currentUsre: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUsre: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
