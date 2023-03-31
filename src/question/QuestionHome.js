import './question_list.css'
import { useState } from "react";
import useFetch from "../api/useFetch"
import QuestionList from './QuestionList';

const QuestionHome = () => {
  const [url, setUrl] = useState('api/questions/all')
  const { isPending, data, error } = useFetch(url)

  const changeUrl = (url) => { setUrl(url) }

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <h3>Loading...</h3>}
      {data && <QuestionList questions={data} onChange={changeUrl} />}
    </>
  );
}

export default QuestionHome;
