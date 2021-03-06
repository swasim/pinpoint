import { UPDATE_HOTSPOTS, SHOW_HOTSPOTS, HIDE_HOTSPOTS } from '../actions/constants';

const INITIAL_STATE = {
  data: [],
  warning: null,
  isVisible: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_HOTSPOTS:
      console.log('hotspots payload:', action.payload);
      console.log('new hotspots state:', {...state, ...action.payload});
      return { ...state, ...action.payload };
    case SHOW_HOTSPOTS:
      return { ...state, isVisible: true };
    case HIDE_HOTSPOTS:
     return { ...state, isVisible: false };
    default:
      return state;
  }
} 