import React from 'react'
import useFetch from '../api/useFetch'
function Question({questionId}) {
  const url = "api/questions/" + questionId;
  const { isPending, data, error } = useFetch(url)
  if (!isPending){
    console.log(data)
  }
  return (
    <div className='questionPanel'>
      <h1>{"tema"}</h1>
      
    </div>
  )
}

export default Question