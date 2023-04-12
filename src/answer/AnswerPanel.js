import React from 'react';
import './answerPanel.css';
import { useState } from 'react';
import useFetchPost from '../api/useFetchPost';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const AnswerPanel = ({ id, addAnswer }) => {
  const { user } = useContext(UserContext)
  const [answerContent, setAnswerContent] = useState('');
  const contentChange = event => { setAnswerContent(event.target.value); }

  const { postAsync } = useFetchPost();
  const postNewAnswer = async () => {
    const url = 'api/answers/';
    const answerObject = {
      'desc': answerContent,
      'questionId': Number(id),
      'clientId': user.id
    }
    const returnedIdOfAnswer = await postAsync(url, answerObject);
    setAnswerContent('')
    addAnswer(returnedIdOfAnswer)
  }

  return (
    <div className='answerPanel'>
      <div>Your answer</div>
      <textarea className='answerField' onChange={contentChange} value={answerContent} />
      <button className='sendButton' onClick={postNewAnswer}>Send answer</button>
    </div>
  )
}

export default AnswerPanel;
