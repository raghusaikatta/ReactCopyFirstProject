import React, {useState}from 'react';

const Signin = () => {

    const [data,setData] = useState({
        email:'',
        password:''
    })
    const {email, password} =data;

    const changeHandler =(e) =>{
        setData({...data,[e.target.name] : e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(data);
        alert(`${email} and password are valid`)
    }



    return (
        <div>
            <form className="text-center" onSubmit={submitHandler}>
                <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating " >
                    <input type="email" className="form-control" placeholder="name@example.com" name="email" value={email} onChange={changeHandler} />
                    <label >Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" required placeholder="Password" name="password" value={password} onChange={changeHandler} />
                    <label >Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2020–2021</p>
            </form>

        </div>
    );
}

export default Signin;