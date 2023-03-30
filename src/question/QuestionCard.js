import './question_card.css'
import { Link } from 'react-router-dom'
import dateConverter from '../util/dateConverter'

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <div className="question-card-title">
        <Link to={`/question/${question.id}`}><h2>{question.title}</h2></Link>
      </div>
      <div className='question-card-bottom-box'>
        <div className="question-card-answer-number">
          <p>No. answer: {question.answerCount}</p>
        </div>
        <div className='question-card-date'>
          {dateConverter(question.date)}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
