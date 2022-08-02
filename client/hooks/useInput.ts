import React, { useState } from "react"

export const useInput = (defaultState) => {
    const [value, setValue] = useState(defaultState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}