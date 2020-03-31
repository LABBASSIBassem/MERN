import React, { Component } from 'react'

class Login extends Component {

    state={
        email: '', 
        password: ''
    }

   handleChange = (e) =>{
       this.setState({
           [e.target.name]: e.target.value,
       })

    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.setState({
            email:'', 
            password: ''
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="">
                    <form className="col 12">
                        <h5>Login </h5>
                        <div className="row">
                            <input 
                            name="email"
                             value={this.state.email} 
                             id="email"
                             type="email"
                             onChange={(e)=>{this.handleChange(e)}}
                             className="validate"  />
                             <label htmlFor="email">Email</label>
                             <span className="helper-text" data-error="type a right email" 
                             data-sucess="type"
                             />
                        </div>
                        <div className="row">
                            <input 
                            name="password"
                             value={this.state.password} 
                             id="password"
                             type="password"
                             onChange={(e)=>{this.handleChange(e)}}
                             className="validate"  />
                             <label htmlFor="password">Password</label>
                             <span className="helper-text" data-error="wrong" 
                             data-sucess="type"
                             />
                             </div>
                        <div className="row">
                            <div className="col 12">
                                <button
                                className="btn waves-effect red lighten-2"
                                type="submit"
                                onClick={(e)=>{this.handleSubmit(e)}}
                                 >
                                    Login
                                </button>
                            </div>
                        </div>




                    </form>
                </div>
           
            </div>
        )
    }
}

export default Login