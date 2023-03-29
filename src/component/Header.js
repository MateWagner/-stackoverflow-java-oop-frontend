import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div><h1>Full Stack Overflow</h1></div>
      <div><Link to={'/new/question'}>Add New Question</Link></div>
    </nav>
  );
}

export default Header;
