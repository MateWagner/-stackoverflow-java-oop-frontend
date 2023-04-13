import React, { useContext } from 'react'
import useFetch from '../api/useFetch'
import { Link, useNavigate } from 'react-router-dom'
import "./question.css";
import { UserContext } from '../UserContext';

function Question({ id, title, description, clientId }) {
  const { user } = useContext(UserContext)
  const { data: clientData } = useFetch("api/client/" + clientId);
  const canModify = (user.id === clientId || user.isAdmin)
  const navigate = useNavigate()

  const deleteQuestion = async () => {
    const res = await fetch(`/api/questions/${id}`, { method: 'DELETE' })
    if (res.ok) navigate(`/`);
  }

  return (
    <>
      <div className='questionPanel'>
        <h1>{title}</h1>
        <Link to={'/profile/' + clientId}>
          <p>Asked by {clientData && clientData.name}</p>
        </Link>
        <h3>{description}</h3>
      </div>
      {canModify &&
        <div className='control-panel'>
          <button className='edit' onClick={() => navigate(`/question/edit/${id}`)}>Edit</button>
          <button className='delete' onClick={() => deleteQuestion()}>Delete</button>
        </div>
      }
    </>
  )
}
export default Question
