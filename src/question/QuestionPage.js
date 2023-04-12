import { useParams } from 'react-router-dom'
import Question from './Question';
import useFetch from '../api/useFetch';
import Answers from '../answer/Answers';
const QuestionPage = () => {
  const { id } = useParams();
  const { data: question } = useFetch("api/questions/" + id)
  const { data } = useFetch('api/answers/answers_of_question/' + id)

  return (
    <div>
      {question &&
        <>
          <Question {...question} />
          {data && <Answers answers={data} solutionId={question.solutionAnswerId} questionId={id} />}
        </>
      }
    </div>
  );
}

export default QuestionPage;
