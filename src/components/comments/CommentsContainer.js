import { connect } from "react-redux";
import Comments from "./Comments";
import { addCommentsAC, inputCommentAC, deleteCommentAC, loadCommentsAC } from "../../redux/commentsReducer"

const mapStateToProps = (state) => {
    return{
        value: state.commentsReducer.commentInput,
        comments: state.commentsReducer.comments,
    }; 
}

const mapDispatchToProps = (dispatch) => {
    return{
        addComment: (name, body, id) => {
            dispatch(addCommentsAC(name, body, id))
        },
        handleInput: (text) => {
            dispatch(inputCommentAC(text))
        },
        deleteComment: (id) => {
            dispatch(deleteCommentAC(id))
        },
        loadComments: (api) => {
            dispatch(loadCommentsAC(api))
        }
    }; 
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);



export default CommentsContainer;