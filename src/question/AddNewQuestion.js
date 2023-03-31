import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import UseFetchPost from "../api/useFetchPost";

const AddNewQuestion = () => {
  const { user } = useContext(UserContext)
  const [title, setTitle] = useState("")
  const [question, setQuestion] = useState("")
  const navigate = useNavigate()

  /*const postNewAnswer = async () => {
    const url = 'api/question/';
    const answerObject = {
      'title': title,
      'description': question,
      'clientId': (user != null ? user.id : 1)
    }
    const returnedIdOfNewQuestion = postAsync(url, answerObject);
    if (returnedIdOfNewQuestion > 0) navigate(`/question/${returnedIdOfNewQuestion}`);
    console.log(returnedIdOfNewQuestion);
  }*/
  async function sendNewQuestion() {
    const { postAsync } = UseFetchPost();
  
    const newQuestionId = await postAsync("api/questions/", {
      title,
      description: question,
      clientId: (user != null ? user.id : 1)
    });
  
    if (newQuestionId > 0) navigate(`/question/${newQuestionId}`);
  }

  return (
    <div>
      <h2>Title: </h2>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <h2>Question details: </h2>
      <textarea name="question" id="question" cols="30" rows="10" value={question} onChange={(event) => setQuestion(event.target.value)}></textarea>
      <div>
        <button onClick={() => sendNewQuestion()}>Send Question</button>
      </div>
    </div>
  );
}

export default AddNewQuestion;
