import {SELECT_EVENT} from '../actions/eventAction'

export default function event(state = {}, action) {
    switch (action.type) {
      case SELECT_EVENT:
        return {
          eventId: action.event
        };
      default:
        return state;
    }
}
