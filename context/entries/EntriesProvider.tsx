import { FC, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { v4 as uuid4 } from 'uuid'
import { entriesReducer } from './entriesReducer';
import { entry } from '../../interfaces';


export interface EntriesState {
    entries: entry[]
}

const Entries_INITIAL_STATE: EntriesState ={
    entries: [
      {
        _id: uuid4(),
        description: 'Pending: test v1 ',
        createdAt: Date.now(),
        status: 'pending', 
      },
      {
        _id: uuid4(),
        description: 'In - Progress: test v2 ',
        createdAt: Date.now() - 100000,
        status: 'in-progress', 
      },
      {
        _id: uuid4(),
        description: 'Completed: test v3 ',
        createdAt: Date.now() - 200000,
        status: 'completed', 
      },
      {
        _id: uuid4(),
        description: 'Completed: test v4 ',
        createdAt: Date.now() - 800000,
        status: 'completed', 
      },
    ],
}

interface Props {
    children?: React.ReactNode
}


const EntriesProvider:React.FC<Props> = ({ children }) => {



 const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
       { children }
    </EntriesContext.Provider>
   )
}

export default EntriesProvider