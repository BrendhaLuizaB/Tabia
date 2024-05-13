import { useReducer } from "react";
import { GlobalContext, GlobalReducer, initialState } from "./Global-context";

// eslint-disable-next-line react/prop-types
const GlobalStore = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)
    return ( 
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
     );
}
 
export default GlobalStore;