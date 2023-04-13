import React, { useContext, useState } from 'react';
import './answerCard.css';
import useFetch from '../api/useFetch';
import useFetchPost from '../api/useFetchPost';
import dateConverter from '../util/dateConverter';
import { UserContext } from '../UserContext';

function AnswerCard({ questionId, id, description, clientId, date, isSolution, hasSolution, setSolutionState, changeSolutionId }) {
  const { isPending, data, error } = useFetch('api/client/' + clientId);
  const [isMarked, setIsMarked] = useState(isSolution);
  const { user } = useContext(UserContext)
  const canModify = (user.id === clientId || user.isAdmin)
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState(description)

  const { postAsync } = useFetchPost();

  const selectSolution = () => {
    setIsMarked(!isMarked);
    postSolution(!isMarked);
    setSolutionState(!isMarked)
    changeSolutionId(!isMarked ? id : 0)
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

  const submitChanges = async () => {
    const res = await fetch(`/api/answers/${id}`, {
      method: 'PATCH',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ desc: content })
    })
    if (res.ok) setEdit(false);
  }

  if (edit) {
    return (
      <div className='answerPanel'>
        <div>Your answer</div>
        <textarea className='answerField' onChange={e => setContent(e.target.value)} value={content} />
        <button className='sendButton' onClick={() => submitChanges()}>Submit Changes</button>
      </div>
    )
  }

  return (
    <div className="answer-card">
      <div className="answer-desc">{content}</div>
      <div className="answer-details">
        <span className={isMarked ? 'tick' : 'mark-as-solution'} onClick={() => selectSolution()}>
          {isMarked && '✓'}
          {!isMarked && !hasSolution ? 'Mark as solution' : ""}
        </span>
        <div className="answer-giver">{error ? "error" : (isPending ? "..." : data.name)}</div>
        <div className="answer-date">{dateConverter(date)}</div>
        {canModify && <button className='edit-button' onClick={() => setEdit(true)}>Edit</button>}
      </div>
    </div>
  )
}

export default AnswerCard;
