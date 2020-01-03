import React, { Component } from "react"
import {  Link } from 'react-router-dom'
import AliceCarousel from "react-alice-carousel" 
import  bed1 from "../image/bed1.jpg"
import Gallary from "../gallary/gallary"




class Home extends Component {
    constructor() {
        super()
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            user: [],

        }

    }
    componentDidMount() {
       const data = JSON.parse(localStorage.getItem("user"))
       if (data ===""){
           //console.log("no user")
       }
     //console.log(data, "this is user")
       
       this.setState({
           user: data
       })

    }
    
    Author_check_function() {
        const post_by = "kelvin"
        const first_name = "kelvin";

        if (first_name.toUpperCase() === post_by.toUpperCase()) {
            console.log(" this is true")
            this.setState({
                author_check: true
            })
        }

      return

    }
    handleLogout(e) {

    }
    render() {

        return (
        <div>     
                <div className="container gallary">
                    <div className="row">
                        
                        <div className="col">
                            <Gallary />
                        </div>
                        

                    </div>
                </div>
                    
                <div className="container culture  animated swing">
                    <div className="row">
                        <div className="col">
                            <h4> Our culture </h4>
                            <p>
                                We have observe two types of festive which  include 
                                <i>
                                    IGWE FESTIVAL :This festival is celebrated every 
                                    week of january to mark the beginning of new year for
                                    the community. 
                                </i>
                                <i>
                                    NEW YAM FESTIVAL :This festival is use to mark first fruit for the farmers. All farmers wait
                                    for this festival before they will start havesting for sales
                                </i>
                            </p>
                        </div>
                
                    <div className="col">
                        <h4> Our Norms And Value</h4>
                        <p> As a community we practices necromacy: The practice of necromacy is
                            carried out in order to accertain the cause of the death
                            and ask important question concerning the family.
                        </p>
                    </div>
                    </div>
               </div>
               <div>
                   
               </div>
           </div>



        )
    }
}

export default Home;
