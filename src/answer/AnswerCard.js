import React from 'react'
import './answerCard.css'
import useFetch from '../api/useFetch';
function AnswerCard({ desc, clientId, date }) {
  const { isPending, data, error } = useFetch('/client/' + clientId);
  return (
    <div className="answer-card">
      <div className="answer-desc">{desc}</div>
      <div className="answer-details">
        <div className="answer-giver">{error ? "error" : (isPending ? "..." : data.name)}</div>
        <div className="answer-date">{date}</div>
      </div>
    </div>
  )
}

export default AnswerCard