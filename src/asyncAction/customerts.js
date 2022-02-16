import {addManyCustomerAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(addManyCustomerAction(json))
            })
            // диспатчим асинхронную ф-ю
    }
}