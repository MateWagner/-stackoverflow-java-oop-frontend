import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Header = ({ users }) => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <nav>
      <div><h1>Full Stack Overflow</h1></div>
      <div className='header-menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'/new/question'}>Add New Question</Link>
        <Link to={`/profile/${user.id}`}>Hello: {user.name}</Link>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </nav >
  );
}

export default Header;
