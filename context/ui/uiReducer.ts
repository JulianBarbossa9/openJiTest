
import { UIState } from './UIProvider';


type UIActionType = 
| { type: '[UI] - Open SideBar'}
| { type: '[UI] - Close SideBar'}
| { type: '[UI] - Adding Entry', payload: boolean }
| { type: '[UI] - Start Dragging' }
| { type: '[UI] - End Dragging' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

switch(action.type) {
  case '[UI] - Open SideBar':
    return {
      ...state,
      sideMenuOpen: true,
    }
  case '[UI] - Close SideBar':
    return {
      ...state,
      sideMenuOpen: false,
    }
  case '[UI] - Adding Entry':
    return {
      ...state,
      isAddingEntry: action.payload,
    }
  case '[UI] - Start Dragging':
    return {
      ...state,
      isDragging: true,
    }
  case '[UI] - End Dragging':
    return {
      ...state,
      isDragging: false,
    }

  default:
    return state
  }
}