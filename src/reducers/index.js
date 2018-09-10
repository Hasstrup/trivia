import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const url = "https://opentdb.com/api.php?amount=16&category=18";
const initialState = {
  trivia: []
};

// Action creator to get the trivia
export const getTrivia = () => {
  return dispatch => {
    axios.get(url).then(response => {
      console.log(response);
      let newResults= response.data.results.map(( q, i ) => {
        q.id=i
        return  q
      })
      console.log('newResults ', newResults)
      return dispatch({
        // displatch an action
        type: "GET_TRIVIA", //which represents an instruction to follow so that the store gets updated correctly
        triviaData: newResults
      });
    });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRIVIA":
      return {
        trivia: action.triviaData
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

/**
 * The reducer's job is to take the old info from the store and update it
 * with the new data from the action that the dispatcher gave it.
 * It's conceptually equivalent to React's setState method.
 *
 * The reducer function takes 2 parameters: the current version of
 * state and the action object that the dispatcher gave it
 *
 * The reducer should look at the action object and determine
 * what to do based on the action's type property. Handled by the below switch
 *
 * calling another function and takes dispatch serves the reducer an action is going to be created
 * The dispatcher sends actions to the reducer.
 * middleware handle dispatching actions asyncronously
 */
