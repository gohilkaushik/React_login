import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [allEnatry, setAllEntery] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    // const newEntry = { email: email, password: password };
    // setAllEntery([...allEnatry, newEntry]);
    if(email == 'Kaushik123@gmail.com' && password == 'Kaushik@123'){
        navigate('/home');
    }
  };

  return (
    <>
      <div className="main">
        <div className="login-form">
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
