const COMMENT_CREATE = "COMMENT_CREATE";
const INPUT_COMMENT = "INPUT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const COMMENTS_LOAD = "COMMENTS_LOAD";

const initialState = {
    commentInput: "",
    comments: []
}

const commentsReducer = (state = initialState, action) => {
    console.log("reducer -->>", action);
    switch(action.type) {
        case COMMENT_CREATE: {
            const newState = {...state, commentInput: ""};
            if (state.comments.length !== 0) {
                const newComments = [...state.comments];
                newComments.push(action.data);
                newState.comments = newComments;
                return newState;
            } else {
                const newComments = [];
                newComments.push(action.data);
                newState.comments = newComments;
                return newState;
            }            
        }
            // return {
            //     ...state,
            //     commentInput: "",
            //     comments: [...state.comments, action.data],
            // } 
        case INPUT_COMMENT: {
            return {
                ...state,
                commentInput: action.value,
            }
        }
        case COMMENTS_LOAD: {
            return {
                ...state,
                comments: [...state.comments, ...action.api],
            }
        }
        case DELETE_COMMENT: {
            const newComments = [...state.comments];
            const filterComments = newComments.filter((comment) => {
                return comment.id !== action.id;
            })
            if (filterComments.length > 0) {
                const newState = {...state, comments: filterComments}
                return newState;
            } else {
                const newState = {...state, comments: []}
                return newState;
            }
        }
        default: return state;
    }
}

export const addCommentsAC = (name, body, id) => ({type: COMMENT_CREATE, data: {name, body, id}});
export const inputCommentAC = (text) => ({type: INPUT_COMMENT, value: text});
export const deleteCommentAC = (id) => ({type: DELETE_COMMENT, id: id});
export const loadCommentsAC = (api) => ({type: COMMENTS_LOAD, api: api,});

export default commentsReducer;