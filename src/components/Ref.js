import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class Ref extends Component {
    state = {
        name: "",
        redirect: false
    }
    changeHandler = (e) => {
        this.setState({name: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({redirect : this.state.name === "AAA"})
    }

    render() {

        return (
            <div>
                <h1> Class componet</h1>
                {this.state.redirect && <Redirect to="/" />}
                <form onSubmit={this.submitHandler}>
                    <label >Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

export default Ref;