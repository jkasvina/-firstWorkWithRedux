const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        // изначально состояние является неизменяемым,
        // поэтому новое состояние - всегда новый объект
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(
                        (customer) => customer.id !== action.payload
                    )}
        default:
            return state;
        // возвращаем неизменённое текущее состояние
    }
}

// такая ф-я называется action creator
// принимает данные и возвращает объект action
// нужна чтобы не писать объекты, а просто вызывать функцию по имени action-а
// type - обязательное поле
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});