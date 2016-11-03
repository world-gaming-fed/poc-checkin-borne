export const SELECT_EVENT = 'SELECT_EVENT';
export const SET_CAPACITY = 'SET_CAPACITY'

export function stock(id) {
  return {
    type: SELECT_EVENT,
    event: id
  };
}

export function setCapacity (capacity) {
  return {
    type: SET_CAPACITY,
    capacity: capacity
  }
}
