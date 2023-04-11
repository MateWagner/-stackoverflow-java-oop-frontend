import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import AddNewQuestion from './question/AddNewQuestion';
import QuestionPage from './question/QuestionPage';
import { UserContext } from './UserContext'
import QuestionHome from './question/QuestionHome';
import SingeIn from './login/SingeIn';
import LoginForm from './login/LoginForm';
import ProfilePage from './profile/ProfilePage';

function App() {
  const [user, setUser] = useState(null)

  const setUserObject = (userToLogin) => {
    setUser(userToLogin)
    localStorage.setItem('user', JSON.stringify(userToLogin))
  }

  if (!user) {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser) {
      setUser(localUser);
    }
    else {
      return (
        <div className='App'>
          <LoginForm setUserObject={setUserObject} />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<QuestionHome />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/new/question' element={<AddNewQuestion />} />
            <Route path='/question/:id' element={<QuestionPage />} />
            <Route path='singe-in' element={<SingeIn />} />
            <Route path='/profile/:id' element={<ProfilePage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
