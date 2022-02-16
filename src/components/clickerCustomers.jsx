import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";
import {fetchCustomers} from "../asyncAction/customerts";

const ClickerCustomers = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customerReducer.customers);

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div style={{ marginTop: "10px", border: '1px solid black', display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <button style={{margin: '5px'}} onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button style={{margin: '5px'}} onClick={() => dispatch(fetchCustomers())}>
                    Получить клиентов с сервера
                </button>
            </div>
            {customers.length ? (
                <div>
                    {customers.map((customer) => (
                        <h3 style={{display: "flex", justifyContent: 'center'}} onClick={() => removeCustomer(customer)} key={customer.id}>
                            {customer.name}
                        </h3>
                    ))}
                </div>
            ) : (
                <h3 style={{display: "flex", justifyContent: 'center'}}>Клиентов нет</h3>
            )}
        </div>
    );
};

export default ClickerCustomers;