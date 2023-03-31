import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import useFetch from './api/useFetch';
import Header from './component/Header';
import AddNewQuestion from './question/AddNewQuestion';
import QuestionPage from './question/QuestionPage';
import { UserContext } from './UserContext'
import QuestionHome from './question/QuestionHome';

function App() {
  const [user, setUser] = useState(null)
  const [url] = useState("api/client/all")
  const { data, isPending } = useFetch(url)
  console.log(isPending);
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        {!isPending && <Header users={data} />}
        <div className='content'>
          <Routes>
            <Route path='/' element={<QuestionHome />} />
            <Route path='/new/question' element={<AddNewQuestion />} />
            <Route path='question/:id' element={<QuestionPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
