import React from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useEffect,useState } from 'react';

function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    const element=document.documentElement;
    // console.log("my ele",element)
    useEffect(() => {
        if (theme === "dark") {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
      return (
        <>
          {
          theme === "dark" ? (
            <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
          ) : (
            <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
          )}
        </>
      );
}

export default DarkMode
