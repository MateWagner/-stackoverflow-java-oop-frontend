import './loginForm.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setUserObject }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const login = async () => {
    setError('')
    const response = await fetch('api/client/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
    console.log(response.ok);
    if (!response.ok) {
      setError('No Email or Password Correct')
      setEmail('')
      setPassword('')
      return;
    }
    const user = await response.json()
    setUserObject(user);
    navigate(`/`)
  }

  return (
    <div className="login">
      <div>
        {error && error}
        <label>Email</label>
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>
      <div>
        <button onClick={() => login()}>Login</button>
      </div>
      <div><Link to={'/singe-in'}>Singe In</Link></div>
    </div>
  );
}

export default LoginForm;
