import { FC, useEffect, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { entry } from '../../interfaces';
import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack'


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
 const { enqueueSnackbar } = useSnackbar()

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

}

 const updateEntry = async( {_id, description, status}: entry, showSnackbar = false) => {
   try {
    const { data } = await entriesApi.put<entry>(`/entries/${_id}`, {description: description, status: status})
    dispatch({type: '[Entry] - Entry Update', payload: data })

    if ( showSnackbar ) {

      enqueueSnackbar('Entry is updated',{
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
    

    
  } catch (error: any) {
    console.log({error})
  }
 }

 const refreshEntries =async () => {
  const { data } = await entriesApi.get<entry[]>('/entries')
  dispatch({ type: '[Entry] - Refresh Data', payload: data})

 }

 const deleteEntry = async (_id: string, showSnackBar = false) => {
  
  try {
    const { data } = await entriesApi.delete<entry>(`/entries/${_id}`)
    dispatch({ type: '[Entry] - Delete Entry', payload: data})
    
    if( showSnackBar ) {
      enqueueSnackbar('Entry is deleted',{
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
  } catch (error) {
    console.error({error})
  }
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
      deleteEntry,
    }}>
       { children }
    </EntriesContext.Provider>
   )
}

export default EntriesProvider