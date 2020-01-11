import React, { Component } from "react"
import "./createPost.css"
import Axios from "axios"
import { Link,BrowserRouter} from 'react-router-dom'


class Comment extends Component {
    constructor(props) {
        super(props)
        this.onchangePost_body = this.onchangePost_body.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       

        this.state = {
            tittle: "",
            post_body: "",
            first_name: "",
            post :""



        }
    }
  
    onchangePost_body(event) {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            post_body: event.target.value
        });
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"))
        this.setState({
            user: user
        })
        Axios.get("http://localhost:8000/quotepost/" + this.props.match.params.id + "/")
            .then((resp) => {
                 console.log(resp.data)
                this.setState({
                    post_body: resp.data.post_body,
                })
            })

    }
   


  


    
    handleSubmit = (e) => {
        e.preventDefault()
        const postdata = {
            comment: this.state.post_body,
            comment_by: this.state.user.first_name
  //http://localhost:8000/comment/61/
  //"http://iru.herokuapp.com/comment/"
        }
        console.log(postdata)
        Axios.post("http://localhost:8000/comment/"+ this.props.match.params.id + "/", postdata)
            .then((resp) => {
                console.log("post saves successful", resp.data)
                this.props.history.push("/forum")
            })


    }


    render() {
        return (

            <form className="text-center" >
                <div className="container">
                    <div className="row">
                
                        <div className="col">
                            <label className="text-center"> Comment </label>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <textarea type="textarea" className="text-center"
                                 value={this.state.post_body}
                                 onChange={this.onchangePost_body}
                                   > </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-success">  Post </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        )
    }
}
export default Comment;