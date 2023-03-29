import React from 'react'

function AnswerCard(clientName, desc) {
  return (
    <div>
      <h3>{clientName}</h3>
      <h4>{desc}</h4>
    </div>
  )
}

export default AnswerCard