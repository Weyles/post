export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
    likes: 0,
}

const likesReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return{
                ...state,
                likes: state.likes + 1,
            } 
        
        case DECREMENT:
            if (state.likes > 0) {
                return{
                    ...state,
                    likes: state.likes -1
                }
            } else return state;

        default:
            return state;
    }
}

export const incrementAC = () => ({type: INCREMENT});
export const decrementAC = () => ({type: DECREMENT});

export default likesReducer;