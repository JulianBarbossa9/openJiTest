import { createContext } from 'react';


interface ContexProps {
     sideMenuOpen: boolean

     //Methods
     openSideMenu: () =>void
     closeSideMenu: () =>void
}

export const UIContext = createContext({} as ContexProps);