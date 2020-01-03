import React, { Component} from "react"
import "./createPost.css"
import Axios from "axios"


class CreatePost extends Component{
    constructor(props){
        super(props)
        this.onchangeTittle = this.onchangeTittle.bind(this)
        this.onchangePost_body= this.onchangePost_body.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.state ={
            tittle : "",
            post_body : "",
            first_name:"",
            user:[],
            
            
           
        }
    }

    componentDidMount(){
       const data= JSON.parse(localStorage.getItem("user"))
       this.setState({
           user : data
       })
       
    }
    onchangeTittle(event){
        event.preventDefault();
        console.log(event.target.value)
        
       this.setState({
           tittle: event.target.value
           
       })
    }
    onchangePost_body(event) {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
        post_body: event.target.value
        });
    }
    handleSubmit  = (e) =>{
        e.preventDefault()
         const postdata ={
             tittle: this.state.tittle,
             post_body : this.state.post_body,
             post_by :  this.state.user.first_name
             
        }
        console.log(postdata)
        Axios.post("https://iru.herokuapp.com//create_post/", postdata)
        .then((resp)=>{
            console.log("post saves successful", resp.data)
            this.history.props.push("/forum")
        })
        

    }


    
    render(){
        return(
            
            <form className="text-center" >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label className="text-center" > Tittle </label>
                            </div>
                        </div>
                        <div className="container">
                              <div className="row">
                                  <div className="col">
                                <input type="text" className="text-center" onChange={this.onchangeTittle} value={this.state.tittle} /> 
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label className="text-center"> Comment </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <textarea type="textarea" className="text-center"  onChange={this.onchangePost_body}  value={this.state.post_body}  > </textarea>
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
export default CreatePost;