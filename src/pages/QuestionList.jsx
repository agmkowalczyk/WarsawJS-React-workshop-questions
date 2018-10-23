import React from 'react';
import Question from './Question';
import './QuestionList.css';

// const components = {
//   text: () => <strong>tekst</strong>,
//   multi: () => <s>tekst</s>,
// }
          // {/* const Question = components[question.type]; */}
          // {/* return (<Question key={question.id} {...question} />); */}

const QuestionList = (
    { 
      questions = [],
      handleChange,
    } = {}
  ) => {
  return (
    <ol>
      {
        questions.map(question => (
          <Question 
            key={question.id} 
            {...question} 
            handleChange={handleChange}            
          />
        ))
      }
    </ol>
  );
}

export default QuestionList;
