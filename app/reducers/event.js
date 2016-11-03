import {SELECT_EVENT, SET_CAPACITY} from '../actions/eventAction'


export default function event(state = {}, action) {
    switch (action.type) {
      case SELECT_EVENT:
        return {
          eventId: action.event,
        };
      case SET_CAPACITY:
      return {
        ...state,
        capacity: action.capacity,
      };
      default:
        return state;
    }
}
