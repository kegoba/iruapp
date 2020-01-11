import React, { Component } from "react"
import Axios from "axios"
import { Link } from 'react-router-dom'
import Home from "../home/Home"
import Auth from "../Auth/auth"
class ViewPost extends Component {
    constructor(props) {
        super(props)
        this.handleLike = this.handleLike.bind(this)
        this.handleShare = this.handleShare.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        //this.Author_check_function= this.Author_check_function.bind(this)
        this.state = {
            user:[] ,
            post: [],
            comment:[],
            id :"",
            post_by :"",
            post_date:"",
            tittle :"",
            post_body :"",
            like :false,
            number_of_like:0,
            number_of_share :0,
            author_check : false,
            first_name:""
            
        }
    }
    //http://localhost:8000/comment
    //"http://iru.herokuapp.com/viewpost/"
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"))
        Axios.all([
            Axios.get("http://localhost:8000/viewpost/" + this.props.match.params.id + "/"),
            Axios.get("http://localhost:8000/comment/" + this.props.match.params.id +  "/")
           
        ])
            .then(Axios.spread((viewpost, viewcomment) => {
                this.setState({
                    id: viewpost.data.id,
                    post_by: viewpost.data.post_by,
                    post_date: viewpost.data.post_date,
                    tittle: viewpost.data.tittle,
                    post_body: viewpost.data.post_body,
                    comment: viewcomment.data,
                    user: user
                })
                if (user) {
                    console.log(this.state.comment)
                    const post_by = viewpost.data.post_by
                    const first_name = user.first_name
                    if (first_name.toUpperCase() === post_by.toUpperCase()) {
                        this.setState({ 
                            author_check: true 
                        })
                    }
                }        
            }))
    }

    
    handleDelete() {
        const url = "http://localhost:8000/deletepost/" + this.props.match.params.id + "/"
        Axios.delete(url)
            .then((resp) => {
                this.props.history.push("/forum")
            })
    }

    handleLike = (e) => {
        e.preventDefault()
        const like = true
        const count = +1
        console.log(like, "like has just be been cliked")
        this.setState({
            like: true,
            number_of_like: count,

        })

    }
    handleShare = (e) => {
        e.preventDefault()
        const count = +1
        console.log( "share has just be been cliked")
        this.setState({
        
            number_of_share: count,

        })

    }
    render() {
        return (
            <div className=" container post-container">

                   <h4>  {this.state.tittle}</h4>
                   <p>  {this.state.post_date}  </p>
                   <p>  <Link to="">  posted by: {this.state.post_by} </Link> </p>
                <div className="comments items "  >
                     <p>  {this.state.post_body} </p>
                        {this.state.author_check === true ? 
                        (<div> 
                            <i onClick={this.handleLike}> Like ({this.state.number_of_like})  </i>
                            <i onClick={this.handleShare}> Share({this.state.number_of_share})  </i>
                            <Link to={"/comment/" + this.state.id}>  qoute  </Link>
                            <Link to={"/comment/"}>  comment </Link>
                            <i onClick={this.handleDelete}>  delete </i>
                        </div>)  :
                         (<div>
                            <i onClick={this.handleLike}> Like ({this.state.number_of_like})  </i>
                            <i onClick={this.handleShare}> Share({this.state.number_of_share})  </i>
                            <Link to={"/comment/" + this.state.id}>  qoute  </Link>
                            <Link to={"/comment/"}>  comment </Link>                          
                        </div>)
                        }               
                    </div>
                <div >
                {this.state.comment.map((data, key) => 
                <div  key={key}>
                    <i className="text-justify" > {data.comment}</i>
                    <div className="comment">
                    <i > comment by {data.comment_by}</i>
                    <i> date {data.post_date}</i>
                    <i onClick={this.handleLike}> Like ({this.state.number_of_like})  </i>
                    <i onClick={this.handleShare}> Share({this.state.number_of_share})  </i>
                    
                   </div>
                 </div> 

                )}
              </div>

                </div>
               


               
            

        )
    };
}


export default ViewPost