import { useParams } from 'react-router-dom'
import AnswerPanel from '../answer/AnswerPanel';
import AnswerList from '../answer/AnswerList';
import Question from './Question';
const QuestionPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Question questionId={id}/>
      <AnswerPanel questionId={id}/>
      <AnswerList questionId={id}/>
    </div>
  );
}

export default QuestionPage;
