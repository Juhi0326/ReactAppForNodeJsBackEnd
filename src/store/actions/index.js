export const increment = ()=> {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ()=> {
    return {
        type: 'DECREMENT'
    }
}

export const signIn2 = (payload)=> {
    return {
        type: 'SIGN_IN2',
        payload
    }
}
export const signIn = ()=> {
    return {
        type: 'SIGN_IN'
    }
}

export const signOut = ()=> {
    return {
        type: 'SIGN_OUT'
    }
}
export const signOut2 = ()=> {
    return {
        type: 'SIGN_OUT2'
    }
}


export const toastShow = (text, textType)=> {
    return {
        type: 'TOAST_SHOW',
        payload: text,
        textType,
    }
}

export const toastHide = (text)=> {
    return {
        type: 'TOAST_HIDE',
        payload: '',
        textType: '',
    }
}
