import React,{useState} from 'react';

const Signup = () => {

    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        city:""

    });

    const{username,email,password,confirmpassword,city} = data;

    const changeHandler =(e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler= (e) =>{
        e.preventDefault();
        

        if(password !== confirmpassword){
            console.log("Incrrect password")
        }else{
            console.log (data);
            alert(`${username} : signed up successfully`)
        }
    }


    return (
        <div>

            <h3> Sign up into Blessing Application</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quam voluptatum consectetur deleniti! Ea enim, amet illum quae eveniet quos sit atque facilis tenetur voluptate laudantium eius sint cumque beatae!</p>
            <br />
            <p><strong>Please fill below details: </strong></p>

            <form onSubmit={submitHandler} >
                <div >
                    <div className="form-group col-md-6">
                        <label >Username</label>
                        <input type="text" className="form-control" required name="username" value={username} onChange={changeHandler}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label >Email</label>
                        <input type="email" className="form-control"   name="email" value={email} onChange={changeHandler} />
                    </div>
                    <div className="form-group col-md-6">
                        <label >Password</label>
                        <input type="password" className="form-control"  name="password" value={password} onChange={changeHandler}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label >Conform Password</label>
                        <input type="password" className="form-control" name="confirmpassword" value={confirmpassword} onChange={changeHandler} />
                        
                    </div>
                    {password !==confirmpassword ? <p style={{"color":"red"}}> Password not matching </p> : <p  style={{"color":"green"}}>Password matched</p>}
                    <div className="form-group col-md-6">
                        <label >City</label>
                        <input type="text" className="form-control" name="city" value={city} onChange={changeHandler} />
                    </div>
                </div>

                <br />

                <button type="submit" className="btn btn-primary">Sign in</button> 
                
            </form>
        </div>
    );
}

export default Signup;