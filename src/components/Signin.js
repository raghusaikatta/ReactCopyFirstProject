import React, {useRef, useState}from 'react';
import { Redirect } from 'react-router';


const Signin = () => {
    const [reDirectUser, setRedirect] = useState(false)
    const firstName = useRef(null);
  const lastName = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName.current.value == "abc"){
        setRedirect(true)
    }
  };
  return (
    <div>
      {reDirectUser &&  <Redirect to={"/"}/>}
      <h1>Un Controlled</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={firstName} />
        <br />
        <label>lName</label>
        <input type="text" ref={lastName} />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signin;