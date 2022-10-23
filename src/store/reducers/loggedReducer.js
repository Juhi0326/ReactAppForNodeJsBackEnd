const loggedReducer = (state = false, action) => {
    if (action.type === 'SIGN_IN') {
        return true
    } else if (action.type === 'SIGN_OUT'){
        return false
    } else {
        return state
    }

}

export default loggedReducer;