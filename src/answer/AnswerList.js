import useFetch from "../api/useFetch"
import AnswerCard from "./AnswerCard";

const AnswerList = ({questionId}) => {
  const { isPending, data, error } = useFetch('/answers/answers_of_question/' + questionId)
  console.log(questionId)
  return (
    <div>
      <h1>Answers</h1>
      {isPending && <p>Loading...</p>}
      {error && <h1> {error} </h1>}
      {data &&
        data.map((answer) => <AnswerCard key={answer.id} desc={answer.description} />)}
    </div>
  );
}

export default AnswerList;
