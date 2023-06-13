import {ChangeEvent, useState} from "react";

export interface IReturnedValues {
    value: any,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {value, handleChange}
}