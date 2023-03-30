import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import AddNewQuestion from './question/AddNewQuestion';
import Question from './question/Question';
import QuestionList from './question/QuestionList';
import { UserContext } from './UserContext'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<QuestionList />} />
            <Route path='/new/question' element={<AddNewQuestion />} />
            <Route path='question/:id' element={<Question />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
