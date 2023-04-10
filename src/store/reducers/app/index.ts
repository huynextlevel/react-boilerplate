import {
  IAppState,
  IAppActions
} from './types/reducer.type'
import { CHECK_IS_MOBILE } from '../../actions'

const initialState: IAppState = {
  isMobile: false
}

// eslint-disable-next-line
export default (state = initialState, action: IAppActions) => {
  switch (action.type) {
    case CHECK_IS_MOBILE:
      return { ...state, isMobile: action.isMobile }
    default:
      return state
  }
}
