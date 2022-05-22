import React, {useState} from 'react';
import {saveState} from './localStorage/LocalStorage'
import SuperEditableSpan from "../common/superEditableSpan/SuperEditableSpan";
import SuperButton from "../common/superButton/SuperButton";
import s from '../components/super2.module.css'

const Super2 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue('')
    }

    return (
        <div>
            <hr/>


            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton className={s.button} onClick={save}>save</SuperButton>
            <SuperButton className={s.button} onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default Super2;