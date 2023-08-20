import { createContext } from 'react';
import { entry } from '../../interfaces';


interface ContextProps {
     entries: entry[]; 
}

export const EntriesContext = createContext({} as ContextProps);