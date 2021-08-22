import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Signin from './components/Signin';
import Signup from './components/Signup';


const App =() =>{
  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Products" exact component={Products} />

        </Switch>
      </BrowserRouter>
      

    </div>
  )
}

export default App;