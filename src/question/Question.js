import { useParams } from 'react-router-dom'
import Answer from '../answer/AnswerPanel';
const Question = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Question page with answer question id: {id}</h1>
      <Answer/>
    </div>
  );
}

export default Question;
