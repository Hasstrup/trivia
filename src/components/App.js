import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import LargeQuestionView from "./LargeQuestionView";
import LargeAnswerView from "./LargeAnswerView"

class App extends Component {

  render() {
    return (
      // routes
        <Switch>
          <Route exact path="/" component={QuestionsList} />
          <Route exact path="/:questionId" component={LargeQuestionView} />
          <Route exact path="/:questionId/answer" component={LargeAnswerView} />
        </Switch> 
    );
  }
}

export default App
// export default connect(
//   state => state,
//   { getTrivia }
// )(App);

/**
 * @class App
 * @extends {Component}
 *
 *
 *https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
 * get Data from Trivia API
 *
 * connect allows the App conmponent to talk to the store
 * takes two args. 1) function 2) object that has the prop of action creators
 */
