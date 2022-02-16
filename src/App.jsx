import React from "react";
import ClickerCash from "./components/clickerCash";
import {useDispatch, useSelector} from "react-redux";
import {customerReducer} from "./store/customerReducer";

function App() {
    const dispatch = useDispatch();
  const customers = useSelector(state => state.customerReducer.customers)

    const addCustomer = (name) => {
      const customer = {
          name,
          id: Date.now(),
      }
        dispatch({type: 'ADD_CUSTOMER', payload: customer})
    }

    const removeCustomer = (customer) => {

        dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id})
    }

  return (
    <div>
        <ClickerCash/>
        <div style={{marginTop: '10px'}}>
        <div style={{ display: "flex" }}>
            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        </div>
        {customers.length ?
        <div>
            {customers.map(customer =>
                <h3 onClick={() => removeCustomer(customer)} key={customer.id}>
                    {customer.name}
                </h3>
            )}
        </div>
        : <h3>Клиентов нет</h3>
        }
        </div>
    </div>
  );
}

export default App;
