import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";




export default function ThemeToggle({ buttonClasses }) {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className={`cursor-pointer ${buttonClasses}`}
        >
            {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
    );
}