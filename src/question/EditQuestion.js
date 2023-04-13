import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./addNewQuestion.css";
import useFetch from "../api/useFetch";

const EditQuestion = () => {
  const { id } = useParams();
  const { data } = useFetch("api/questions/" + id)

  return (
    <>
      {data && <EditForm question={data} />}
    </>
  );
}

const EditForm = ({ question }) => {
  const [title, setTitle] = useState(question.title)
  const [description, setDescription] = useState(question.description)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  async function sendNewQuestion() {
    if ((user.id !== question.client_id) || !user.isAdmin) navigate('/')
    const res = await fetch(`api/questions/${question.id}`, {
      method: 'PATCH',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title,
        description
      })
    });

    if (res.ok) navigate(`/question/${question.id}`);
  }

  return (
    <div>
      <h2>Title: </h2>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <h2>Question details: </h2>
      <textarea name="question" id="question" cols="30" rows="10" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
      <div>
        <button onClick={() => sendNewQuestion()}>Edit Question</button>
      </div>
    </div>
  )
}

export default EditQuestion;
