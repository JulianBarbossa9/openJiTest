import { FC, useEffect, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { v4 as uuid4 } from 'uuid'
import { entriesReducer } from './entriesReducer';
import { entry } from '../../interfaces';
import { entriesApi } from '../../apis';


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

 /**
  * Calls to API
  */
 const addNewEntry = async(description: string ) => {

  try {
    const { data } = await entriesApi.post<entry>('/entries', { description: description})
    dispatch({ type: '[Entry] - Add new Entry', payload: data})
    
  } catch (error) {
    console.log(error)
  }
    
  // const newEntry: entry = {
  //     _id: uuid4(),
  //     description: description,
  //     createdAt: Date.now(),
  //     status: 'pending'
  //   }

}

 const updateEntry = async( {_id, description, status}: entry) => {
   try {
    const { data } = await entriesApi.put<entry>(`/entries/${_id}`, {description: description, status: status})
    dispatch({type: '[Entry] - Entry Update', payload: data })
    
  } catch (error: any) {
    console.log({error})
  }
 }

 const refreshEntries =async () => {
  const { data } = await entriesApi.get<entry[]>('/entries')
  // console.log(response)
  dispatch({ type: '[Entry] - Refresh Data', payload: data})

 }

 useEffect(() => {
  refreshEntries()
 },[])
  

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