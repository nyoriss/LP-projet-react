import {ADD, REMOVE, RESET} from '../actions/index'

const INITIAL_STATE = {
  equipe: [],
  history: [],
}

function handleChange(state, action, change) {
  const {equipe, history} = state;
  if(action=="ADD")
    equipe.push(change)
  if(action=="REMOVE")
    equipe.splice(change, 1)
  if(action=="RESET")
    equipe.splice(0, equipe.length)
  return ({
    equipe: equipe,
    history: [equipe + change, ...history]
  })
}

export default function bookMark(state = INITIAL_STATE, action) {
  const {equipe, history} = state;
  switch(action.type) {
    case ADD:
      return handleChange(state, ADD, 1);
    case REMOVE:
      return handleChange(state, REMOVE, 1);
    case RESET:
      return (INITIAL_STATE)
    default:
      return state;
  }
}