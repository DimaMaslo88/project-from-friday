import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/redux-store";
import SuperRadio from '../common/superRadio/SuperRadio';
import SuperSelect from '../common/superSelect/SuperSelect';
import s from '../components/super3.module.css'

const arr = ['x', 'y', 'z']
const Super3 = () => {
    const [value, onChangeOption] = useState(arr[1])
    const theme = useSelector<AppRootStateType, string>(state => state.theme.themes)
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>


                {/*should work (должно работать)*/}
                <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
          </span>

        </div>
    )
}


export default Super3;