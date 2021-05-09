import React from "react";
import {Profile} from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfilePropsType = {
    // store: any
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
