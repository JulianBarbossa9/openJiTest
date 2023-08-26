import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
};

interface Props {
  children?: React.ReactNode;
}

const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "[UI] - Open SideBar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "[UI] - Close SideBar" });
  };

  const setIsAddingEntry = (isAdding : boolean) => {
    dispatch({ type: '[UI] - Is Adding Entry', payload: isAdding})
  }



  return (
    <UIContext.Provider
      value={{
        // sideMenuOpen: state.sideMenuOpen
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
