import React from 'react';
import './answerPanel.css';
import { useState } from 'react';
import useFetchPost from '../api/useFetchPost';
const AnswerPanel = () => {
  const { postAsync } = useFetchPost();
  const [answerContent, setAnswerContent] = useState('');
  const contentChange = event => { setAnswerContent(event.target.value); }
  //TODO: Replace hard-coded values and make changes on site without reloading the page.
  /*  
      Change the hard coded parameters (questionId & clientId) of new answer
      posting when login already working and we can get the ID of current client.

      Use the returned ID of the newly posted answer to extend the AnswerList, so
      we don't have to reload the site for seeing changes.
  */
  const postNewAnswer = async () => {
    const url = 'answers';
    const answerObject = {
      'desc': answerContent,
      'questionId': 1,
      'clientId': 1
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