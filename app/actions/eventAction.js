export const SELECT_EVENT = 'SELECT_EVENT';

export function stock(id) {
  return {
    type: SELECT_EVENT,
    event:  id
  };
}
