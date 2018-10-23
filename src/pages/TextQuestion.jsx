import React from 'react';

const TextQuestion = ({
  question = '',
  id,
} = {}) => {
  return (
    <li>
      { question }
      <input type="text" value="pp" />
    </li>
    
  );
}

export default TextQuestion;
