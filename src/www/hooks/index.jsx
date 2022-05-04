import React, { useState, useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from './reducer'
import { superheroes } from "../../declarations";
import { customAxios } from "../utils/custom-axios";

export function Provider({ children }) {
    const [prinpId, setPrinpId] = useState();

    const value = {
        prinpId,
        setPrinpId
    }


    return (
        <Context.Provider value={value}>
            { children }
        </Context.Provider>
    )
}

export function useUIContext() {
    return useContext(Context);
  }

  
export const withContext = (Component) => {
    return (props) => {
      return (
        <Context.Consumer>
          {(globalState) => {
            return <Component {...globalState} {...props} />;
          }}
        </Context.Consumer>
      );
    };
  };