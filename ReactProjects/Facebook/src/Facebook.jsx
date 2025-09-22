import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
function Facebook() {

  const [Admins, setAdmins] = useState([]);
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate=useNavigate()

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:3000/Admin");
      let data = await res.json();
      setAdmins(data);
    }
    fetchData();
  }, []);
  

  let isPresent = Admins.filter(
    (user) => user.name === uname && user.password === pwd
  );

  function val_facebook(e) {
    e.preventDefault();
    if (isPresent.length > 0) {
      alert("Login Successful");
      navigate('/post');
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className="fb-container">
      <div className="fb-right">
        <div className="fb-login-box">
          <form>
            <input
              type="text"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              placeholder="Email address or phone number"
              required
            />
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" className="login-btn" onClick={val_facebook}>
              Log in
            </button>
            <a href="#">Forgotten password?</a>
            <hr />
            <button type="button" className="create-btn">
              Create new account
            </button>
          </form>
        </div>
        <p>
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default Facebook;
