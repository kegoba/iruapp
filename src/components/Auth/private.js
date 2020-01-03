import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";


const Private = ({ component: Component, ...rest }) => {
    const isLogin = JSON.parse(localStorage.getItem("user"))
    const message ="login is Required"


    return (
        <Route
            {...rest}
            render={(props) => isLogin
                ? <Component {...props} />
                :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }}
                />

            }

        />
    );
};

export default Private;