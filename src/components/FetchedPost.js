import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchePost } from "../redux/action";
import { Loader } from "./Loader";


export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading);

    if (loading) {
        return <Loader />
    }
    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => {
                dispatch(fetchePost())
            }}
        >Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}