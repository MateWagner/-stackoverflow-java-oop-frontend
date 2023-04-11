import React from 'react'
import useFetch2 from '../api/useFetch2';
import QuestionCard from '../question/QuestionCard';
import './profilCard.css';  
function ProfileCard({clientId}) {
  const { data: profilData } = useFetch2('/api/client/' + clientId);
  const { data: questionData } = useFetch2('/api/questions/all');
  const questionsOfClient = questionData&&questionData.filter(value => value.clientId === Number(clientId));
  return (
    <div className='columns'>
      <div className='profilDetailsOfClient'>
          <h2>{profilData&&profilData.name}</h2>
          <p>Questions: {questionsOfClient&&questionsOfClient.length}</p>
      </div>
      <div className='questionsOfClient'>
        {questionsOfClient&&questionsOfClient.map((question) => <QuestionCard key={question.id} question={question} solutionAnswerId={question.solutionAnswerId} />)}
      </div>
    </div>
  )
}

export default ProfileCard