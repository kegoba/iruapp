import  React,{ Component }from "react"
import Axios from "axios"


import {  Link } from 'react-router-dom'

import "./forum.css"

class Forum extends Component{
    constructor(props){
        super(props)
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
     

        this.state ={
            post : [],
            next:"",
            previous: "",
            count:"",
            like : false,
            number_of_like :0,

        }
    }

   
    handlePrevious = () => {
        const url = this.state.previous
        Axios.get(url)
            .then((resp) => {
                console.log(resp.data)
                this.setState({
                    post: resp.data.results,
                    next: resp.data.next,
                    previous: resp.data.previous,
                    count: resp.data.count
                })

            }
            )

    }

   

    handleNext = () =>{
        const url = this.state.next
        Axios.get(url)
        .then((resp)=>{
            console.log(resp.data)
            this.setState({
                post: resp.data.results,
                next: resp.data.next,
                previous: resp.data.previous,
                count: resp.data.count 
            })

        }
        )

    }

    componentDidMount(){
        Axios.get("http://iru.herokuapp.com/forum/" )
        .then((resp)=>{
            //console.log(resp)
            this.setState ({
                post : resp.data.results ,
                next : resp.data.next,
                previous : resp.data.previous,
                count : resp.data.count    
            })
        })

    }
    render(){
    
        return(
            <div className=" container post-container">
                    {this.state.post.map((posts, p)=>
                    
                        <div className="container text-center post-dispay"  key={p}> 
                        
                            <Link to={"/viewpost/" + posts.id}>  {posts.tittle} </Link> 
                            <div className="comments items "  key={p} >
                            <Link to="">  posted by: {posts.post_by} </Link>
                            <i>  {posts.post_date} </i>
                             </div>
                             
                             </div>

                             
                    )}

                    <div className="container  page-no">
                        <div className="row">
                            <div className="col text-right">
                            <div className=" "  >
                                
                                <Link to="" onClick={this.handlePrevious} >  previous  </Link> ||
                                <Link to=""  onClick={this.handleNext} > next </Link>
                                <b>  ({this.state.count})</b>

                            
                            
                             </div>
                            <div className=" "> </div>
                            <div className=" " >    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
                
           

            
        )
    };
}


export default Forum