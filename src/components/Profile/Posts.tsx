import s from "../../styles/profile.module.css";
import {MyPost} from "./PostItem";
import React from "react";
import {StoreType} from "../../redux/store";

export type postType = {
    id: number
    message: string
    likesCount: number

}
export type postsPropsType = {
    posts: Array<postType>
    addPost: () => void
     newPostText: string
    updateNewPostText: (newText: string) => void
    // dispatch: (action: {type: string, newText?: string}) => void
}

export function Posts(props: postsPropsType) {


    let postsElements = props.posts.map(post => <MyPost text={post.message}
                                                        avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTa1o13qHi0hBEUMcOCKQhrrNSr8pSUmAoA&usqp=CAU"}
                                                        like={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text: string = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }

    return (
        <div>
            <div className={s.contentPosts}>
                <div className={s.postsTitle}>My posts</div>
                <form className={s.postsForm}>
                    <textarea className={s.postsInput} placeholder={"Your news..."} ref={newPostElement}
                               onChange={onPostChange} value={props.newPostText}/>
                    <button type="button" className={s.postsBtn} onClick={onAddPost}>add post</button>
                </form>
            </div>

            <div className={s.contentComments}>
                {postsElements}
            </div>
        </div>
    )
}