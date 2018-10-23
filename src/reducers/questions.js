import {
  createStore
} from 'redux'

import { UPDATE_QUESTION_VALUE, CLEAR_QUESTION_VALUE } from "../actions";

function questions(state = [], action) {
  switch (action.type) {
      case 'UPDATE_QUESTIONS_VALUE':
          return state.concat([action.text])
      default:
          return state
  }
}

const store = createStore(questions, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]