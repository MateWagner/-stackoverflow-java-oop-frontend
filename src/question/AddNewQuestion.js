import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddNewQuestion = ({ userId }) => {
  const [title, setTitle] = useState("")
  const [question, setQuestion] = useState("")
  const navigate = useNavigate()

  async function sendNewQuestion() {
    const newQuestionId = await fetch("/questions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description: question,
        clientId: userId
      }),
    }).then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err))
    if (newQuestionId > 0) navigate(`/question/${newQuestionId}`);
  }
  return (
    <div>
      <h2>Title: </h2>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <h2>Question details: </h2>
      <textarea name="question" id="" cols="30" rows="10" value={question} onChange={(event) => setQuestion(event.target.value)}></textarea>
      <div>
        <button onClick={() => sendNewQuestion()}>Send Question</button>
      </div>
    </div>
  );
}

export default AddNewQuestion;
