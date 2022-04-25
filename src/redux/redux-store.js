import { combineReducers, createStore } from "redux";
//с помощью этой функции мы будем обьединять все наши редюсеры
import likesReducer from "./likesReducer";
import inputReducer from "./inputReducer";
import commentsReducer from "./commentsReducer";

export const reducers = combineReducers({
    likesReducer: likesReducer,
    inputReducer: inputReducer,
    commentsReducer: commentsReducer,
});

const store = createStore(reducers);
//Это обьект в котором мы будем прописывать наши редюсеры

export default store;