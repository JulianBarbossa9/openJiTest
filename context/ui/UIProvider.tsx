import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';


export interface UIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState ={
    sideMenuOpen: false,
}

interface Props {
    children?: React.ReactNode
}


const UIProvider:React.FC<Props> = ({ children }) => {



 const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

 const openSideMenu = () => {
  dispatch({ type: '[UI] - Open SideBar'})
}

const closeSideMenu = () => {
   dispatch({ type: '[UI] - Close SideBar'})
 }
  return (
    <UIContext.Provider value={{
      // sideMenuOpen: state.sideMenuOpen
      ...state,

      //Methods
      openSideMenu,
      closeSideMenu,
    }}>
       { children }
    </UIContext.Provider>
   )
}

export default UIProvider