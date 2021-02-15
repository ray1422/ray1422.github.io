import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/theme_toggle'
import { Section } from '../components/container'
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
function disableBlockDetections(event) {
    window.localStorage.disableBlockDetections = 'true'
    event.preventDefault()
    window.history.go(0)
}
function enableBlockDetections(event) {
    window.localStorage.disableBlockDetections = null
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
                    <br />
                    {window.localStorage.disableBlockDetections != "true" &&
                        <a className="text_texture crystal" href="" onClick={disableBlockDetections}>關掉擋廣告偵測</a>
                    }
                    {window.localStorage.disableBlockDetections == 'true' &&
                        <a className="text_texture crystal" href="" onClick={enableBlockDetections}>開啟擋廣告偵測</a>
                    }
                    <br />
                    <ThemeToggle />
                </div>
            </Section>
        </div>
    )
}