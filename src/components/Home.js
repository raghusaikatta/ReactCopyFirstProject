import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';



const Home = (props) => {

    let history = useHistory();
    const [auth, setAuth]= useState(false);

    if(auth){
        return <Redirect to='/Signin' />
    }

    console.log(props)
    return (
        <div>
           <div><div><br /><br /><br /><br /><br /><br /></div></div>

            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">React First Project</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <Link to='/Signin' className="btn btn-primary my-2">Sign in</Link>
                        <Link to='/Signup' className="btn btn-secondary my-2">Sign up</Link>
                    </p>

                    <div>
                        <button className="btn btn-primary" onClick={() => setAuth(false)}> Redirect</button>
                        <button className="btn btn-primary" onClick={()=> history.push('/Signin')}>useHistory</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;