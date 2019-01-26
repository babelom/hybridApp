import { ListView } from 'react-native';

const initialState = { count: 0 }

function getClick(state = initialState, action) {
  let newState;
  switch (action.type) {
    case 'UP':
      newState = {
        ...state,
        count: state.count += 1
      }
    return newState || state
    case 'DOWN':
      newState = {
        ...state,
        count: state.count -= 1
      }
    return newState || state
    default:
      return state
  }
}

export default getClick
