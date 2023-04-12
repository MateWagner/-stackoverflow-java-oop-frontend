import { useState } from "react";
import AnswerPanel from "./AnswerPanel";
import AnswerList from "./AnswerList";

const Answers = ({ answers, solutionId, questionId }) => {
  const [data, setData] = useState(answers)
  const [solutionAnswerId, setSolutionAnswerId] = useState(solutionId)

  const changeSolutionId = (id) => setSolutionAnswerId(id)

  const addAnswer = async (id) => {
    const res = await fetch(`/api/answers/${id}`)
    const newAnswer = await res.json()
    setData([newAnswer, ...data])
  }

  return (
    <>
      <AnswerPanel id={questionId} addAnswer={addAnswer} />
      <AnswerList answers={data} solutionAnswerId={solutionAnswerId} changeSolutionId={changeSolutionId} />
    </>
  );
}

export default Answers;
