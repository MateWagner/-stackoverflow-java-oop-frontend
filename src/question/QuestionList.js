import './question_list.css'
import QuestionOrder from "../component/QuestionOrder";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions, onChange }) => {

  const changeUrl = (url) => { onChange(url) }

  return (
    <div className="question-list">
      <h1>Questions</h1>
      <div className='question-list-dropdown'>
        <QuestionOrder onChange={changeUrl} />
      </div>
      <div className='question-list-spacer'></div>
      {questions.map((question) => <QuestionCard key={question.id} question={question} solutionAnswerId={question.solutionAnswerId} />)}
    </div>
  );
}

export default QuestionList;
