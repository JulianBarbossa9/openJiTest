import { entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
| { type: '[Entry] - Add new Entry', payload: entry}
| { type: '[Entry] - Entry Update', payload: entry}
| { type: '[Entry] - Refresh Data', payload: entry[]}

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

switch(action.type) {
  case '[Entry] - Add new Entry':
    return {
      ...state,
      entries: [...state.entries, action.payload]
    }
  case '[Entry] - Entry Update':
    return {
      ...state,
      entries: state.entries.map(entry => {
        if (entry._id === action.payload._id){
          entry.status = action.payload.status
        }
        return entry
      })
    }
  case '[Entry] - Refresh Data':
    return {
      ...state,
      entries: [...action.payload]
    }

  default:
    return state
  }
}