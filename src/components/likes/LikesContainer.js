import { connect } from "react-redux";
import { decrementAC, incrementAC } from '../../redux/likesReducer';
import Likes from "./Likes.jsx";

const  mapStateToProps = (state) => {
    return {
        likes: state.likesReducer.likes,
    }
}

const  mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(incrementAC())
        },
        decrement: () => {
            dispatch(decrementAC())
        },
    };
}

const LikesContainer = connect(mapStateToProps, mapDispatchToProps)(Likes);

export default LikesContainer;