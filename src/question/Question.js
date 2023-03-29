import { useParams } from 'react-router-dom'
import Answer from '../answer/AnswerPanel';
import AnswerList from '../answer/AnswerList';
const Question = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Question page with answer question id: {id}</h1>
      <Answer/>
      <AnswerList questionId={id}/>
    </div>
  );
}

export default Question;
