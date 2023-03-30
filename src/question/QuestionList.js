import { useState } from "react";
import useFetch from "../api/useFetch"
import QuestionOrder from "../component/QuestionOrder";
import QuestionCard from "./QuestionCard";

const Home = () => {
  const [url, setUrl] = useState('/questions/all')
  const { isPending, data, error } = useFetch(url)

  const changeUrl = (url) => { setUrl(url) }

  return (
    <div>
      <h1>Questions</h1>
      <QuestionOrder onChange={changeUrl} />
      {isPending && <p>Loading...</p>}
      {error && <h1> {error} </h1>}
      {data &&
        data.map((question) => <QuestionCard key={question.id} question={question} />)}
    </div>
  );
}

export default Home;
