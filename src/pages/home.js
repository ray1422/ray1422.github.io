import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import App from '../App'
import { Section, OuterWrapper } from '../components/container'
import falling_snow_overlay from '../components/falling_snow_overlay'
import '../css/home.css'
function disableSnow(event) {
    window.localStorage.disableFallingSnow = 'true';
    event.preventDefault()
    window.history.go(0)
}
function enableSnow(event) {
    window.localStorage.disableFallingSnow = undefined;
    event.preventDefault()
    window.history.go(0)
}
export default (props) => {
    useEffect(() => { props.setExpandHeader(true) })
    return (
        <div className="ani_item">
            <Section>
                <h2 className="text_texture crystal">相關連結</h2>
                <ul className="text_texture crystal">
                    <li><a href="https://ray-fish.me/blog" target="_BLANK">Blog</a></li>
                </ul>
            </Section>
            <Section>
                <h2 className="text_texture crystal">設定</h2>
                <div className="text_texture crystal">
                    {window.localStorage.disableFallingSnow != "true" &&
                        <a href="" onClick={disableSnow}>關掉下雪</a>
                    }
                    {window.localStorage.disableFallingSnow == 'true' &&
                        <a href="" onClick={enableSnow}>打開下雪</a>
                    }
                </div>
            </Section>
        </div>
    )
}