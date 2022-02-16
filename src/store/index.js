import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import { composeWithDevTools} from "redux-devtools-extension";

// npm i redux-devtools-extension
// для работы middleware с инструментами разработчика redux-devtools

// корневой редьюсер - объект, содержащий все редьюсеры
const rootReducer = combineReducers( {
    // можно записать с именем
    // cash: cashReducer,
    // customers: customerReducer

    cashReducer,
    customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
// composeWithDevTools подключает инструменты разработчика в браузере