import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer"
//initial state
const initialState = {
transactions: []
};

//create context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const[state, dispatch] = useReducer(AppReducer, initialState);

  //actions for delete transaction

  function deleteTransaction (id) {
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    })
  }

  // action for add transaction
  function addTransaction (transaction) {
    dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}