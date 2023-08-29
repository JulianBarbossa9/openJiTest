import { FC, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { v4 as uuid4 } from 'uuid'
import { entriesReducer } from './entriesReducer';
import { entry } from '../../interfaces';


export interface EntriesState {
    entries: entry[]
}

const Entries_INITIAL_STATE: EntriesState ={
    entries: [],
}

interface Props {
    children?: React.ReactNode
}


const EntriesProvider:React.FC<Props> = ({ children }) => {



 const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

 const addNewEntry = (description: string ) => {
    const newEntry: entry = {
      _id: uuid4(),
      description: description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[Entry] - Add new Entry', payload: newEntry})
 }

 const updateEntry = ( entry: entry) => {
  dispatch({type: '[Entry] - Entry Update', payload: entry})
 }
  

  return (
    <EntriesContext.Provider value={{
      ...state,

      //methods
      addNewEntry,
      updateEntry,
    }}>
       { children }
    </EntriesContext.Provider>
   )
}

export default EntriesProvider