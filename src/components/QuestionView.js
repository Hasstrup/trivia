import React, { Component } from "react";

class QuestionView extends Component {

    constructor(props) {
        console.log('props => ', props)
        super(props);
        this.state = {
            ask: false 
        }
    }
    changeAsk = (e) => {
        this.props.history.push(`/${this.props.questionId}`)
    }
    render() {
        const {props} = this;
        return (
            <div className="cardContainer" onClick={this.changeAsk}>
                <div className="cardPoints">
                {/* props.questionAsked will come from QuestionList's State */}
                    {this.state.ask ?
                    <h2>{props.question}</h2>
                    :
                    <h2>{props.difficulty}</h2>
                    }
                    {/* <button className="showQuestion"></button> */}
                </div>
            </div>
        );
    }
}

export default QuestionView