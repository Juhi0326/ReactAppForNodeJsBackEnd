const userReducer = (state = false, action) => {
    if (action.type === 'SIGN_IN2') {
        return {state: true, payload: action.payload };
    } else if (action.type === 'SIGN_OUT2'){
        return {state: false, user: null};
    } else {
        return state
    }

}

export default userReducer;