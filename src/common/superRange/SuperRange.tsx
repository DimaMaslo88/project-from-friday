import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@material-ui/core";

// тип пропсов обычного инпута
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number|number[]) => void
    value1?:any
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,value1,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e) // сохраняем старую функциональность
    //
    //     onChangeRange && onChangeRange(+e.currentTarget.value)
    // }

 const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box
                 sx={{width: 300}}>
                <Slider
                    value={value1}
                    onChange={(event,value) => {onChangeRange(value)}}
                    valueLabelDisplay="on"
                />
            </Box>
        </>

    )
}

export default SuperRange
