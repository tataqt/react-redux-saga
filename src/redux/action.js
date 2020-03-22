import { CREATE_POST, FETCHED_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchePost() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            dispatch({ type: FETCHED_POST, payload: json })
            dispatch(hideLoader());
        }
        catch (e) {
            dispatch(hideLoader());
            dispatch(showAlert('Что-то пошло не так'));
        }

    }
}
export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        });

        setTimeout(() => { dispatch(hideAlert()) },
            3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}