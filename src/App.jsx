import React from "react";
import ClickerCash from "./components/clickerCash";
import ClickerCustomers from "./components/clickerCustomers";

function App() {
  //  npm i redux-thunk - библиотека для работы с асинхронным кодом

  return (
    <div>
      <ClickerCash />
      <ClickerCustomers/>
    </div>
  );
}

export default App;
