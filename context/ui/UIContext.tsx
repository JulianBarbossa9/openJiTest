import { createContext } from 'react';


interface ContexProps {
     sideMenuOpen: boolean
     isAddingEntry: boolean

     //Methods
     openSideMenu: () =>void
     closeSideMenu: () =>void
     setIsAddingEntry: (isAdding: boolean) => void
}

export const UIContext = createContext({} as ContexProps);