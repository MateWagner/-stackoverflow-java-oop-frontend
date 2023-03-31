import React from 'react';
import './answerPanel.css';
import { useState } from 'react';
import useFetchPost from '../api/useFetchPost';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
const AnswerPanel = ({questionId}) => {
  const { user } = useContext(UserContext)
  const [answerContent, setAnswerContent] = useState('');
  const contentChange = event => { setAnswerContent(event.target.value); }
  //TODO: Render changes on site without reloading the page.
  /*  
  Use the returned ID of the newly posted answer to extend the AnswerList, so
  we don't have to reload the site for seeing changes.
  */
 const { postAsync } = useFetchPost();
  const postNewAnswer = async () => {
    const url = 'api/answers/';
    const answerObject = {
      'desc': answerContent,
      'questionId': questionId,
      'clientId': (user != null ? user.id : 1)
    }
    const returnedIdOfAnswer = await postAsync(url, answerObject);
    console.log(returnedIdOfAnswer);
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