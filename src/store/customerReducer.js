import {type} from "@testing-library/user-event/dist/type";

const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
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

// такая ф-я называется action creater
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});