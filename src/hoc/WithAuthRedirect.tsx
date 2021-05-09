import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component: any) => {
    function RedirectComponent(props: any) {
        if (!props.isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}