const getQuestionById = id => question => question.id === id;

// export default function updateQuestions(prevState, id, newValue) {
export default function updateQuestions(questions, action) {
  // const { questions = [] } = prevState;
  const { id, newValue } = action;
  const foundIndex = questions.findIndex(getQuestionById(id));
  
  const prevQuestions = questions.slice(0, foundIndex);
  const nextQuestions = questions.slice(foundIndex + 1);
  const oldQuestion = questions[foundIndex];
  // const updatedQuestion = { question: newValue };
  const updatedQuestion = {
    ...oldQuestion,
    currentValue: newValue,
  }
  return [ ...prevQuestions, updatedQuestion, ...nextQuestions]
}