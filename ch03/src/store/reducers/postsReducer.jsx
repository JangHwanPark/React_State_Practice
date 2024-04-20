import React from 'react';
import {FILTER_POSTS, SET_POSTS} from "../actions/actions";

const initialState = {
    posts: [],
    filteredPosts: [],
};

export default function PostsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                filteredPosts: action.payload,
            };
        case FILTER_POSTS:
            return {
                ...state,
                filteredPosts: state.posts.filter((post) =>
                    post.title.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        default:
            return state;
    }
}