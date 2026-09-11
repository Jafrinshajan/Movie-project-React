import React, { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("selectedTheme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
        }
    }, [darkMode]);

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />

            <label
                className="dark_mode_label"
                htmlFor="darkmode-toggle"
            ></label>
        </div>
    );
};

export default DarkMode;