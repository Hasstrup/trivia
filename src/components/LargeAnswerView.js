import React, { Component } from "react";
import { connect } from "react-redux";
import ProtoTypes from 'prop-types' 

class LargeAnswerView extends Component {
  constructor(props) {
    super();
    let questionId = props.match.params.questionId;
    console.log(props);
    console.log("questiond id ", questionId);
    let question = props.trivia.find(q => q.id == questionId);
    this.state = { question };
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.props);
  }

  backToHome() {
    this.context.router.history.push(`/`)
}

  render() {
    const { correct_answer } = this.state.question;
    return <div style={{
      height: '100vh',
      border: '4px solid white',
      backgroundColor: '#4EB9F9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '26px',
      fontFamily: 'Roboto',
      textAlign: 'center'
    }}
    onClick={() => this.backToHome()}> 
    {correct_answer} 
    </div>;
  }
}
LargeAnswerView.contextTypes = {
    router: ProtoTypes.object.isRequired
}

export default connect(state => {
  return {
    trivia: state.trivia
  };
})(LargeAnswerView);
