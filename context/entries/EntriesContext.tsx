import { createContext } from 'react';
import { entry } from '../../interfaces';


interface ContextProps {
     entries: entry[]

     //Methods
     addNewEntry: (description: string) => void 
     updateEntry: (entry: entry, showSnackbar?: boolean | undefined ) => void
     deleteEntry: (_id: string, showSnackbar?: boolean | undefined ) => void
}

export const EntriesContext = createContext({} as ContextProps);