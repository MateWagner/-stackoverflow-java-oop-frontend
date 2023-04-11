import './header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Header = ({ users }) => {
  const { user } = useContext(UserContext)

  return (
    <nav>
      <div><h1>Full Stack Overflow</h1></div>
      <div className='header-menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'/new/question'}>Add New Question</Link>
        <p>Hello: {user.name}</p>
      </div>

    </nav >
  );
}

export default Header;
