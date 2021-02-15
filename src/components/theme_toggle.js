import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import '../css/theme_toggle.css'



export default function ThemeToggle() {
    const [theme, setTheme] = useState(false)
    const themeStr = window.localStorage.theme || (theme ? "light" : 'dark')
    if (themeStr === 'light') document.body.classList.add('light_theme')
    else document.body.classList.remove('light_theme')
    return (<a className="text_texture crystal"
        onClick={(event) => {
            const themeStr = (!theme) ? "light" : 'dark'
            window.localStorage.theme = themeStr
            setTheme(!theme)
            event.preventDefault()
        }}
        href="#"
    >目前主題：{themeStr}</a>)

}