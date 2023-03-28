import { useParams } from 'react-router-dom'
const Question = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Question page with answer question id: {id}</h1>
    </div>
  );
}

export default Question;
