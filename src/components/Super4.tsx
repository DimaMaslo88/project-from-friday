import React from 'react';
import SuperRadio from '../common/superRadio/SuperRadio';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/redux-store";
import {changeThemeC} from "../bll/superComponentsReducer/themeReducer";
import s from '../components/super3.module.css'

const themes = ['dark', 'red', 'some', 'yellow'];
const Super4 = () => {
    const dispatch = useDispatch()
    const theme = useSelector<AppRootStateType, string>(state => state.theme.themes); // useSelector
    const onChangeCallback = (themes: string) => {
        dispatch(changeThemeC(themes))
    }
// useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <div> <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                /></div>
            </span>

        </div>
    );
}

export default Super4;