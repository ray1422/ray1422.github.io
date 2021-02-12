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
                <h2 className="text_texture crystal">Ray的異世界</h2>
                <div className="text_texture crystal">就是我的個人網站啦</div>
            </Section>
            <Section>
                <h2 className="text_texture crystal">相關連結</h2>
                <ul>
                    <li><a className="text_texture crystal" href="https://ray-fish.me/blog" target="_BLANK">Blog</a></li>
                </ul>
            </Section>
            <Section>
                <h2>設定</h2>
                <div>
                    {window.localStorage.disableFallingSnow != "true" &&
                        <a className="text_texture crystal" href="" onClick={disableSnow}>關掉下雪</a>
                    }
                    {window.localStorage.disableFallingSnow == 'true' &&
                        <a className="text_texture crystal" href="" onClick={enableSnow}>打開下雪</a>
                    }
                </div>
            </Section>
        </div>
    )
}