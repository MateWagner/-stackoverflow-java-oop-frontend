import React, { useState } from 'react';
import './answerCard.css';
import useFetch from '../api/useFetch';
import useFetchPost from '../api/useFetchPost';
import dateConverter from '../util/dateConverter';

function AnswerCard({ questionId, id, description, clientId, date, isSolution, hasSolution, setSolutionState, changeSolutionId }) {
  const { isPending, data, error } = useFetch('api/client/' + clientId);
  const [isMarked, setIsMarked] = useState(isSolution);

  const { postAsync } = useFetchPost();

  const selectSolution = () => {
    setIsMarked(!isMarked);
    postSolution(!isMarked);
    setSolutionState(!isMarked)
    changeSolutionId(id)
  }

  const postSolution = async (solutionState) => {
    const url = '/api/questions/solution';
    const answerObject = {
      'questionId': questionId,
      'answerId': solutionState ? id : 0,
    }
    const returnedIdOfAnswer = await postAsync(url, answerObject, "PATCH");
    console.log("Ez a valasz updatelodott: " + returnedIdOfAnswer);
  }
  return (
    <div className="answer-card">
      <div className="answer-desc">{description}</div>
      <div className="answer-details">
        <span className={isMarked ? 'tick' : 'mark-as-solution'} onClick={() => selectSolution()}>
          {isMarked && '✓'}
          {!isMarked && !hasSolution ? 'Mark as solution' : ""}
        </span>
        <div className="answer-giver">{error ? "error" : (isPending ? "..." : data.name)}</div>
        <div className="answer-date">{dateConverter(date)}</div>
      </div>
    </div>
  )
}

export default AnswerCard;
