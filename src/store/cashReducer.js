const defaultState = {
    cash: 500,
}

// type - обязательное поле
// action = {type: '', payload: '?'}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        // изначально состояние является неизменяемым,
        // поэтому новое состояние - всегда новый объект
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
        // возвращаем неизменённое текущее состояние
    }
}