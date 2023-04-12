import React from 'react'
import useFetch from '../api/useFetch'
import { Link } from 'react-router-dom'
import "./question.css";
function Question({ title, description, clientId }) {
  const { data: clientData } = useFetch("api/client/" + clientId);

  return (
    <div className='questionPanel'>
      <h1>{title}</h1>
      <Link to={'/profile/' + clientId}>
        <p>Asked by {clientData && clientData.name}</p>
      </Link>
      <h3>{description}</h3>
    </div>
  )
}

export default Question
