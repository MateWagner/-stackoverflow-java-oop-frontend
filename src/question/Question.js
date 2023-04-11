import React from 'react'
import useFetch from '../api/useFetch'
import { Link } from 'react-router-dom'
import "./question.css";
function Question({ questionId }) {
  const { data: questionData } = useFetch("api/questions/single/" + questionId)
  const clientId = questionData && questionData.clientId;
  const { data: clientData } = useFetch("api/client/" + clientId);
  return (
    <div className='questionPanel'>
      <h1>{questionData && questionData.title}</h1>
      <Link to={'/profile/' + clientId}>
        <p>Asked by {clientData && clientData.name}</p>
      </Link>
      <h3>{questionData && questionData.description}</h3>
    </div>
  )
}

export default Question
