import React from 'react'
import useFetch2 from '../api/useFetch2'
import { Link } from 'react-router-dom'
import "./question.css";
function Question({ questionId }) {
  const { data: questionData } = useFetch2("api/questions/single/" + questionId)
  const clientId = questionData&&questionData.clientId;
  const { data: clientData } = useFetch2("api/client/" + clientId);
    return (
      <div className='questionPanel'>
        <h1>{questionData&&questionData.title}</h1>
        <Link to={'/profile/' + clientId}>
          <p>Asked by {clientData&&clientData.name}</p>
        </Link>
        <h3>{questionData&&questionData.description}</h3>
      </div>
    )
}

export default Question
