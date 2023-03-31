import useFetch from "../api/useFetch"
import dateConverter from "../util/dateConverter";
import AnswerCard from "./AnswerCard";

const AnswerList = ({questionId, solutionAnswerId}) => {
  const { isPending, data, error } = useFetch('api/answers/answers_of_question/' + questionId)
  return (
    //TODO: isSolution & hasSolution
    /*
      Change isSolution and hasSolution to the corresponding variable which is returned from data. Ask Klavora to extend the answer table
      with these columns and edit the already existing SQL query in the controller to return the datas too.
    */
    <div>
      <h1>Answers</h1>
      {isPending && <p>Loading...</p>}
      {error && <h1> {error} </h1>}
      {data &&
        data.map((answer) => <AnswerCard key={answer.id} questionId={questionId} answerId={answer.id} desc={answer.description}  date={dateConverter(answer.date)} clientId={answer.client_id} isSolution={answer.id === solutionAnswerId} hasSolution={solutionAnswerId !== 0} /> )}
    </div>
  );
}

export default AnswerList;
