import React, {useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
function regiter() {
    const [username , setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) =>{
      e.preventDefault();

      if(password !== confirmPassword){
        console.log('password is not match');
      }else{
      const respons = await axios.post('http://localhost:5052/api/auth/register',{
        username,
        email,
        password
      })
      console.log("register success", respons.data);
      history.push('/login');
    }
  }
  return (
    <div className='bodys'>
        <div className="register-container">
        <form name="form1" className="box" method="post">
          <h4><span>Register</span></h4>
          <h5>Register in to your account.</h5>
          <input type="text" name="email" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" name="username" placeholder="Username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

          <input type="submit" value="Register" className="btn1" />
          <Link to="/login" className="register-link">Login</Link>
        </form>
    </div>
    </div>
  )
}

export default regiter