export const INPUT_TEXT = "INPUT_TEXT";
const initialState = {
    inputText: "",
}

const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case INPUT_TEXT:
            return{
                ...state,
                inputText: state.inputText = action.value,
            } 
        default:
            return state;
    }
}

export const inputAC = (text) => ({type: INPUT_TEXT, value: text});

export default inputReducer;