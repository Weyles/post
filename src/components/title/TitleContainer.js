import { connect } from "react-redux";
import { inputAC } from '../../redux/inputReducer';
import Title from "./Title";

const  mapStateToProps = (state) => {
    return {
        inputText: state.inputReducer.inputText,
    }
}

const  mapDispatchToProps = (dispatch) => {
    return{
        handleInput: (text) => {
            dispatch(inputAC(text))
        },
    };
}

const TitleContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default TitleContainer;