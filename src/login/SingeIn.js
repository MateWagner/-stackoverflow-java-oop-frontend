import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingeIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const singeIn = () => {
    const user = fetch('api/client/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(res => {
        if (!res.ok) return null;
        return res.json()
      })
      .then(user => user)
    if (!user) {
      setError('Cant create user')
      return;
    }
    navigate(`/`)
  }

  return (
    <div className="login">
      <div>
        {error && error}
        <label>Name</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <label>Email</label>
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>
      <div>
        <button onClick={() => singeIn()}>Singe In</button>
      </div>
      <div><Link to={'/'}>Login</Link></div>
    </div>
  );
}

export default SingeIn;
