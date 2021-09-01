import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Ref from './components/Ref';


export const UserContext = React.createContext();


const App =() =>{

  return(
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup"  component={Signup} />
          <Route path="/Signin"  component={Signin} />
          <Route path="/Products" exact component={Products} />
          <Route path="/product/:id"  component={Product} />
          <Route path="/movies" component={Movies}/>
          <Route path="/Ref" component={Ref}/>
        </Switch>
      </BrowserRouter>


      

    </div>
  )
}

export default App;