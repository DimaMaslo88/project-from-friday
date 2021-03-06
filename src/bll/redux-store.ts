import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "./LoginReducer";
import { PasswordReducer } from "./PasswordReducer";
import {ProfileReducer} from "./ProfileReducer";
import {SignUpReducer} from "./SignUpReducer";
import {TestPageReducer} from "./TestPageReducer";
import thunk from "redux-thunk";
import {themeReducer} from "./superComponentsReducer/themeReducer";


const rootReducer = combineReducers({
    login:LoginReducer,
    password:PasswordReducer,
    profile:ProfileReducer,
    signUp:SignUpReducer,
    testPage:TestPageReducer,
    theme:themeReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType=ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;