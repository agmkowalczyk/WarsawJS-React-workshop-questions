import React from 'react';
// import TextQuestion from './Question';

const Question = (
  {
    question,
    type,
    handleChange,
    id,
  } = {}) => {
  return (
    <li>
      <div>{id} | {type} | {question}</div>
      <div><input type="text" onClick={handleChange(id)}/></div>
      <hr />
    </li>
  );
}

export default Question;
