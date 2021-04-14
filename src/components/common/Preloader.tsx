import loader from "../../assets/images/loader.gif";
import React from "react";

export const Preloader = (props: any) => {
    return <div  className={"usersLoader"}>
        <img src={loader}/>
    </div>

}