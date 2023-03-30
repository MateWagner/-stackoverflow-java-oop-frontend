import { Link } from 'react-router-dom'
import dateConverter from '../util/dateConverter'

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <div className="question-title">
        <Link to={`/question/${question.id}`}><h2>{question.title}</h2></Link>
      </div>
      <div className="question-answer-number">
        {question.answerCount}
      </div>
      <div>
        {dateConverter(question.date)}
      </div>
    </div>
  );
}

export default QuestionCard;
