import React from 'react'
import useFetch from '../api/useFetch'
import "./question.css";
function Question({questionId}) {
  const url = "api/questions/single/" + questionId;
  const { isPending, data } = useFetch(url)
  if (!isPending){
    return (
      <div className='questionPanel'>
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
      </div>
    )
  }
}

export default Question