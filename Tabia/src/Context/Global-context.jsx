import { createContext, useContext } from "react";

export const initialState = {
    showMenu: '-100%', 
    showTeams: '-100%'
  }

export const GlobalContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export function GlobalReducer(state, action) {
  switch (action.type) {
    case "setShowMenu":
      return { ...state, showMenu: action.payload };
    case "setShowTeams":
      return {...state, showTeams: action.payload}
    default:
      throw new Error("unknown action");
  }
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
