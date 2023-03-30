import './header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import useFetch from '../api/useFetch';

const Header = () => {
  const { data, error, isPending } = useFetch("/client/all")
  const { user, setUser } = useContext(UserContext)
  const changeUser = (id) => {
    setUser(data.reduce((acc, corr) => corr.id === id ? corr : acc))
  }

  return (
    <nav>
      <div><h1>Full Stack Overflow</h1></div>
      <div>
        <Link to={'/new/question'}>Add New Question</Link>
        <label for="cars">Choose a user:</label>
        {data && <select name="user" id="user" onChange={event => changeUser(event.target.value)}>
          <option value="none">Select</option>
          {data.map(actual => <option key={actual.id} value={actual.id}>{actual.name}</option>)}
        </select>}
        {user && <h2>{user.name}</h2>}
      </div>

    </nav>
  );
}

export default Header;
