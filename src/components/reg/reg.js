import React, { Component } from "react";
import Axios from "axios"


class Reg extends Component{
    constructor(){
        super()
        this.onchangeFirst_name = this.onchangeFirst_name.bind(this);
        this.onchangeLast_name = this.onchangeLast_name.bind(this);
        this.onchangeEmial = this.onchangeEmial.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            first_name : "",
            last_name: "",
            email : "",
            password: "",
        }
    }

    onchangeLast_name (e){
        console.log(e.target.value)
        this.setState({
            last_name : e.target.value
        })
    }

    onchangeFirst_name(e) {
        console.log(e.target.value)
        this.setState({
            first_name: e.target.value
        })
    }

    onchangeEmial(e){
        console.log(e.target.value)

        this.setState({
            email : e.target.value
        })
    }

    onchangePassword(e){
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const postdata = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            phone: "07088"

        }
        console.log(postdata)
        Axios.post("http://localhost:8000/signup/", postdata)
            .then((resp) => {
                console.log("post saves successful", resp.data)
                this.props.history.push("/login")
            })


    }


    render(){
        return(
            <div className=" container text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label >
                               First  Name:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={this.onchangeFirst_name} value={this.state.first_name}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label >
                                Last Name:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={this.onchangeLast_name} value={this.state.last_name} />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label >
                                Email:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={this.onchangeEmial}  value={this.state.email} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label >
                                Password:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="password" onChange={this.onchangePassword}  value={this.state.password}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} > Submit </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Reg;
