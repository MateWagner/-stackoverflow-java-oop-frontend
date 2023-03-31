import React from 'react';
import './answerPanel.css';
import { useState } from 'react';
import useFetchPost from '../api/useFetchPost';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from "react-router-dom";
const AnswerPanel = ({questionId}) => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [answerContent, setAnswerContent] = useState('');
    const contentChange = event => { setAnswerContent(event.target.value); }
    
    const { postAsync } = useFetchPost();
    const postNewAnswer = async () => {
      const url = 'api/answers/';
      const answerObject = {
        'desc': answerContent,
        'questionId': questionId,
        'clientId': (user != null ? user.id : 1)
      }
      const returnedIdOfAnswer = await postAsync(url, answerObject);
      window.location.reload();
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