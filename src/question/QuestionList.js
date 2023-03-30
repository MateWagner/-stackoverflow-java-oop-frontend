import './question_list.css'
import { useEffect, useState } from "react";
import useFetch from "../api/useFetch"
import QuestionOrder from "../component/QuestionOrder";
import QuestionCard from "./QuestionCard";

const Home = () => {
  const [url, setUrl] = useState('/questions/all')
  const { isPending, data, error } = useFetch(url)

  const changeUrl = (url) => { setUrl(url) }

  return (
    <div className="question-list">
      <h1>Questions</h1>
      <div className='question-list-dropdown'>
        <QuestionOrder onChange={changeUrl} />
      </div>
      <div className='question-list-spacer'></div>
      {isPending && <p>Loading...</p>}
      {error && <h1> {error} </h1>}
      {data &&
        data.map((question) => <QuestionCard key={question.id} question={question} solutionAnswerId={question.solutionAnswerId} />)}
    </div>
  );
}

export default Home;
