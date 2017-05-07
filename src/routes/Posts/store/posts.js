import initialComments from './initialComments'
import NoAvatar from '../assets/no_avatar.jpg'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_COMMENT = 'ADD'

// ------------------------------------
// Actions
// ------------------------------------

export const add = (comment) => (
  {
    type    : ADD_COMMENT,
    payload : { avatar: NoAvatar, author: 'Guest', metadata: ['Just now'], comment: comment }
  }
)

export const actions = {
  add
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_COMMENT] : (state, action) => [action.payload].concat(state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = initialComments
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
