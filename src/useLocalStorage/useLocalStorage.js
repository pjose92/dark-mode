import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const item = JSON.parse(localStorage.getItem(key));

    const [value, setStoredValue] = useState(item || initialValue);

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [value, setValue];
}