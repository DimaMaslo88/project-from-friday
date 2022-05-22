import React from 'react';

import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Login} from "./components/Login";
import {SignUp} from './components/SignUp';
import {Profile} from "./components/Profile";
import {ErrorPage} from './components/Error';
import {PasswordRecovery} from './components/PasswordRecovery';
import {NewPassword} from './components/NewPassword';
import {TestPage} from './components/TestPage';


function App() {
    return (
        <div className="App">
            Hello
            <div>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/404" element={<ErrorPage/>}/>
                    <Route path="/passwordRec" element={<PasswordRecovery/>}/>
                    <Route path="/newPassword" element={<NewPassword/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
