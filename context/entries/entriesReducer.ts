import { entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
| { type: '[Entry] - Add new Entry', payload: entry}

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

switch(action.type) {
  case '[Entry] - Add new Entry':
    return {
      ...state,
      entries: [...state.entries, action.payload]
    }

  default:
    return state
  }
}