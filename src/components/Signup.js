import React, {useState} from 'react';



const Signup = () => {

    const[user,setUser] = useState({
        firstName:"",
        lastName:"",
        age: null,
        city:"",
        email:"",
        address:""
    })

    const {firstName,lastName,age,city,email,address}=user

    const handleChange =(event) => {

        if(event.target.name=== "firstName"){
            setUser({...user,[event.target.name]: event.target.value.toUpperCase()});
            
        }else{
            setUser({...user,[event.target.name]: event.target.value});
        }

        
    }

    const submitHandler=(e) =>{
        alert(`firstName = ${firstName} and email ${email} `)
    }


    return ( <div>
        <h1>Signup</h1>

        <form onSubmit={submitHandler}>
            <label >First Name:</label>
            <input type="text" name="firstName" value={firstName} onChange={handleChange} /> <br />
            <label >Last Name:</label>
            <input type="text" name="lastName" value={lastName} onChange={handleChange} /> <br />
            <label >age:</label>
            <input type="text" name="age" value={age} onChange={handleChange} /> <br />
            <label >city:</label>
            <input type="text" name="city" value={city} onChange={handleChange} /> <br />
            <label >email:</label>
            <input type="email" name="email" value={email} onChange={handleChange} /> <br />
            <label >address:</label>
            <input type="text" name="address" value={address} onChange={handleChange} /> <br />

            <input type="submit" name="submit" />

        </form>
    </div> );
}
 
export default Signup;