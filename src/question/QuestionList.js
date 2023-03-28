import useFetch from "../api/useFetch"
import QuestionCard from "./QuestionCard";

const Home = () => {
  const { isPending, data, error } = useFetch('/questions/all')


  return (
    <div>
      <h1>Questions</h1>
      {isPending && <p>Loading...</p>}
      {error && <h1> {error} </h1>}
      {data &&
        data.map((question) => <QuestionCard key={question.id} question={question} />)}
    </div>
  );
}

export default Home;
