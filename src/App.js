import { Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Question from './question/Question';
import QuestionList from './question/QuestionList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<QuestionList />} />
          <Route path='question/:id' element={<Question />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
