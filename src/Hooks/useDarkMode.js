import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage.js";

export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode ] = useLocalStorage (key, initialValues);

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode')
            console.log("Dark Mode is ON")
        } else {
            document.body.classList.remove('dark-mode')
            console.log("Dark Mode is OFF")

        }
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;
