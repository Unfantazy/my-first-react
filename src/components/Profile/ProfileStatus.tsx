import s from "../../styles/profile.module.css";
import React from "react";


class ProfileStatus extends React.Component<any, any> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ //ассинхронный
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({ //ассинхронный
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div className={s.profileStatus}>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "--"}</span>
            </div>
            }
            {this.state.editMode &&
            <div className={s.profileStatus}>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                       onChange={this.onStatusChange}/>
            </div>
            }
        </>
    }
}

export default ProfileStatus
