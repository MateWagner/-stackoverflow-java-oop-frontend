import './header.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const Header = ({ users }) => {
  const [currentUserId, setCurrentUserId] = useState("")
  const { user, setUser } = useContext(UserContext)
  const changeUser = (id) => {
    const currentUser = users.reduce((acc, corr) => corr.id === Number(id) ? corr : acc, null)
    setCurrentUserId(id)
    setUser(currentUser)
  }

  return (
    <nav>
      <div><h1>Full Stack Overflow</h1></div>
      <div>
        <Link to={'/new/question'}>Add New Question</Link>
        <label for="cars">Choose a user:</label>
        {users && <select name="userSelect" id="userSelect" value={currentUserId} onChange={event => changeUser(event.target.value)}>
          {users.map(actual => <option key={actual.id} value={actual.id}>{actual.name}</option>)}
        </select>}
        {user && <h2>{user.name}</h2>}
      </div>

    </nav >
  );
}

export default Header;
