import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {Posts} from "./Posts";
import {StoreType} from "../../redux/store";
import {connect} from "react-redux";


export type postType = {
    id: number
    message: string
    likesCount: number

}
export type postsPropsType = {
    // posts: Array<postType>
    // addPost: () => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: { type: string, newText?: string }) => void
    store: StoreType
}

// export function PostsContainer(props: postsPropsType) {
//
//     let state = props.store.getState()
//
//     const addPost = () => {
//         // props.addPost();
//         props.store.dispatch(addPostActionCreator())
//     }
//     const onPostChange = (text: string) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }
//
//     return (
//         <Posts posts={state.profilePage.posts} addPost={addPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText}/>
//     )
// }


const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)