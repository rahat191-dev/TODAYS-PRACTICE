"use state"
import { useEffect, useState } from "react"

export function useDarkMode() {
    const [isDark, setIsDark] = useEffect(false);

    useState (() => {
        const storedMode =localStorage.getItem ("theme");
        if (storedMode === "dark") {
            document.documentElement.classList.add ("dark")
            setIsDark (true);
        } else {
                document.documentElement.classList.remove("dark")
                setIsDark(false);
            }
    }, []);
}