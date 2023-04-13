import { useState } from "react";
import AnswerCard from "./AnswerCard";

const AnswerList = ({ answers, solutionAnswerId, changeSolutionId }) => {
  const [hasSolution, setHasSolution] = useState(solutionAnswerId > 0)

  const setSolutionState = (state) => {
    setHasSolution(state)
  }

  const getAnswers = () => {
    const solution = answers.reduce((acc, solution) => solution.id === solutionAnswerId ? solution : acc, null)
    if (!solution) return answers
    return [solution, ...answers.filter(a => a.id !== solution.id)]
  }

  return (
    <div>
      <h1>Answers</h1>
      {getAnswers().map((answer) => (<AnswerCard key={answer.id}
        {...answer}
        isSolution={answer.id === solutionAnswerId}
        hasSolution={hasSolution}
        setSolutionState={setSolutionState}
        changeSolutionId={changeSolutionId} />)
      )}
    </div>
  );
}

export default AnswerList;
