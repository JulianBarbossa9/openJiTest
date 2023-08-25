import { createContext } from 'react';
import { entry } from '../../interfaces';


interface ContextProps {
     entries: entry[]

     //Methods
     addNewEntry: (description: string) => void 
}

export const EntriesContext = createContext({} as ContextProps);