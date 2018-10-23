import React from 'react'
import database from '../dummy/db.json';
import QuestionList from './QuestionList';
import updateQuestions from '../utils/updateQuestions';
import './QuestionView.css';

class QuestionsView extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.setState({
      questions: database.questions,
    });
  }

  handleChange = id => e => {
    const value = e.target.value;
    // const upd = updateQuestions(this.state, id, value);
    // console.log(upd);
    
    // this.setState() {
    //   lastChange: value
    // });
  }

  render() {
    const { questions } = this.state;

    return (
      <section>
        <QuestionList 
          questions={questions} 
          handleChange={this.handleChange}
          />
      </section>
    );
  }
}

export default QuestionsView;
