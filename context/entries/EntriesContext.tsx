import { createContext } from 'react';
import { entry } from '../../interfaces';


interface ContextProps {
     entries: entry[]

     //Methods
     addNewEntry: (description: string) => void 
     updateEntry: (entry: entry) => void
}

export const EntriesContext = createContext({} as ContextProps);