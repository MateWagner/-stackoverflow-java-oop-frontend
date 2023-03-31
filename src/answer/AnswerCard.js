import React, { useState } from 'react';
import './answerCard.css';
import useFetch from '../api/useFetch';
import useFetchPost from '../api/useFetchPost';

function AnswerCard({ questionId, answerId, desc, clientId, date, isSolution, hasSolution }) {
  const { isPending, data, error } = useFetch('api/client/' + clientId);
  const [isMarked, setIsMarked] = useState(false);
  const { postAsync } = useFetchPost();
  const selectSolution = () => {
    setIsMarked(!isMarked);
    postSolution();
    //TODO: Post the changes and check if has right to mark answer as solution.
    /*
        Post the changes to answer tabel to update isSolution and hasSolution columns with useFetchPost.
        Extend the code with a paramater which can decide if the current client who watching the asnwer detail site
        has right to mark an answer as solution or not.
    */
  }
  const postSolution = async () => {
    const url = '/api/questions/solution';
    const answerObject = {
      'questionId': questionId,
      'answerId': answerId,
    }
    const returnedIdOfAnswer = await postAsync(url, answerObject);
    console.log("Ez a valasz updatelodott: " + returnedIdOfAnswer);
  }
  return (
    <div className="answer-card">
      <div className="answer-desc">{desc}</div>
      <div className="answer-details">
        <span className={(isMarked || isSolution) ? 'tick' : 'mark-as-solution'} onClick={() => selectSolution()}>
          {(hasSolution && !isSolution) || (!hasSolution) ? (isMarked ? '✓' : 'Mark as soultion') : ""}
        </span>
        <div className="answer-giver">{error ? "error" : (isPending ? "..." : data.name)}</div>
        <div className="answer-date">{date}</div>
      </div>
    </div>
  )
}

export default AnswerCard;
