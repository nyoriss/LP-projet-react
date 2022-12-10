export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RESET = 'RESET';

export function addPoke() {
  return ({ type: ADD});
}

export function removePoke() {
  return ({ type: REMOVE});
}

export function resetPoke() {
  return ({ type: RESET});
}