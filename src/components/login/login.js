import React, {Component} from "react";
import {  Link } from 'react-router-dom'
import axios from "axios";
import Auth from "../Auth/auth"
import login from "../image/login.png"
class Login extends Component{
    constructor(props){
        super(props)
            this.onchangeEmail = this.onchangeEmail.bind(this);
            this.onchangePassword = this.onchangePassword.bind(this);
            this.handlesubmit = this.handlesubmit.bind(this)
            this.handlereg = this.handlereg.bind(this)

            this.state={
                email : "" ,
                password : "",
                isLogin: false,
                user: []
              
            }

    }
    

    onchangeEmail(event) {
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        });
    }



onchangePassword(event){
    console.log(event.target.value)
    this.setState({
        password: event.target.value
    });
}

    handlesubmit = (Authenticate)=>{
        const postdata = {
            "email" : this.state.email,
            "password" : this.state.password
        }
        
        axios.post("http://localhost:8000/login/", postdata)
            .then((resp) => { 
              console.log(resp)
            if (resp.status === 200){
                const user = resp.data
               localStorage.setItem("user", JSON.stringify(user))   
                Auth.login(()=>{
                this.setState(()=>({
                isLogin:true,
                user : user
                }))
                console.log("login successful")
                this.props.history.push("/")
            })
                    
                }
            else{
             console.log("invalid login details")
            }
        })
        .catch(function (error) {
            console.log(error)

        })

        
   
}

handlereg = (event)=>{
    console.log(event.target.email)
    this.props.history.push("/reg")
}

    render(){
        return(
            <div>
            
            <div className=" card bg-light container login text-center">
                
                <div className="card-body text-center">
                        <div className="container">
                            <img src={login} />
                        </div>
                    
                  <div className="container login-input">
                    <div className="row">
                    <div className="col">
                        <label> Email </label>
                        <div className="col">
                                    <input type="text" className=""  onChange={this.onchangeEmail} value={this.state.email}/>
                        </div>
                        </div>
                    </div>
                    </div>
                        <div className="container">
                            <div className="row">
                               <div className="col">
                                <label> Password </label>

                                <div className="col">
                                    <input type="password" autoComplete="on" onChange={this.onchangePassword} value={this.state.password} />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <button  type="submit" className="btn btn-success" onClick={this.handlesubmit} > Login </button>
                                </div>
                            </div>
                        </div>
                            <div className="container">
                            <div className="row">
                                <div className="col">
                                <p className ="registered"> Not registered? <Link to={"/reg"}> Register </Link>  </p>
                                </div>
                            </div>
                        </div>
                    </div>


              </div>

</div>
        )
    }
}

export default Login;
