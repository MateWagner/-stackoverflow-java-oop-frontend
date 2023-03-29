import React from 'react';
import './answerPanel.css';
import { useState } from 'react';
import useFetchPost from '../api/useFetchPost';
const AnswerPanel = () => {
  const { postAsync } = useFetchPost();
  const [answerContent, setAnswerContent] = useState('');
  const contentChange = event => { setAnswerContent(event.target.value); }

  const postNewAnswer = async () => {
    const url = 'answers';
    const answerObject = {
      'desc': answerContent,
      'questionId': 1,
      'clientId': 1
    }
    const a = await postAsync(url, answerObject);
    console.log(a);
  }
  return (
    <div className='answerPanel'>
      <div>Your answer</div>
      <textarea className='answerField' onChange={contentChange}/>
      <button className='sendButton' onClick={postNewAnswer}>Send answer</button>
    </div>
  )
}

export default AnswerPanel;