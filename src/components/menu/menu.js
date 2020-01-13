import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import History from "./history"
import CreatePost from "../createPost/createPost"
import Comment from "../createPost/comment"
import QUOTE from "../createPost/quote"
import Home from "../home/Home"
import Forum from "../forum/forum"
import Login from "../login/login"
import Reg from "../reg/reg"
import Private from "../Auth/private"
import ViewPost from "../viewpost/viewpost"
import logo from "../image/logo.jpg"



class Menu extends Component {
    constructor() {
        super()
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            user: [],
            isLogin : false,

        }

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("user"))
       // console.log("menu data",data)
        this.setState({
            user: data
        })

    }
    
    handleLogout(e) {
        localStorage.removeItem("user")
        this.props.history.push("/login")
    }
    render() {
        return (

            <Router className="container text-center">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link className="navbar-brand" to={"/"}> <img src={logo} />  </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#dropDrown">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="dropDrown" >
                            
                               {!this.state.user?
                                (<div>
                                <ul className="navbar-nav ">
                                 <li className="nav-item">
                                    <Link to={"/"} className="nav-link" > Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/forum"} className="nav-link"> forum </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/createpost"} className="nav-link"> Post </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/history"} className="nav-link" > Iru History </Link>
                                </li>
                        
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link" > Login </Link>
                                    
                                 </li>
                                </ul>
                                </div>)
                                :
                                (
                                    <div>
                                <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link" > Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/forum"} className="nav-link"> forum </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/createpost"} className="nav-link"> Post </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/history"} className="nav-link" > Iru History </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/logout"} className="nav-link" onClick={this.handleLogout}> logout </Link>
                                </li>
                                </ul>
                                </div>)}
    
                            
                        </div>
                    </nav>
                    
                </div>
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/history" component={History} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/viewpost/:id" component={ViewPost} />
                    <Route path="/forum"  component={Forum}/>
                    <Private path="/createpost" component={CreatePost} /> 
                    <Private path="/comment/:id" component={Comment}  /> 
                    <Private path="/quotepost/:id" component={QUOTE} /> 
                    <Private path="/deletepost/:id" component={ViewPost} />   
                </Switch>

            </Router>



        )
    }
}

export default Menu;
