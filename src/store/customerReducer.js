const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}
        // изначально состояние является неизменяемым,
        // поэтому новое состояние - всегда новый объект
        case 'REMOVE_CUSTOMER':
            return {...state, customers: state.customers.filter(
                        (customer) => customer.id !== action.payload
                    )}
        default:
            return state;
        // возвращаем неизменённое текущее состояние
    }
}