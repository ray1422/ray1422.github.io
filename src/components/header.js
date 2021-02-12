import { Link } from 'react-router-dom'
import avatar from '../assets/images/ray.jpg'
import avatar_webp from '../assets/images/ray.webp'
import { detectAnyAdblocker } from 'just-detect-adblock'
import { Section } from '../components/container'
import '../css/header.css'
import { useEffect, useState } from 'react'

export default function Header(props) {
    const [adBlockStat, setAdBlockStat] = useState(false)
    useEffect(() => {
        detectAnyAdblocker().then((stat)=> {
            setAdBlockStat(stat);
        })
    }, [])
    let AdBlockWarning = null
    if (adBlockStat) {
        AdBlockWarning = (
            <Section>
                <h2 style={{ color: "red" }}>什麼，你居然在使用 AdBlock⁉️</h2>
                <div style={{ color: "yellow", fontWeight: 600 }}>雖然這裡沒有廣告，但是我就是要說:P</div>
            </Section>
        )
    }

    return (
        <div>
            <div className={"section header " + (props.expand ? "expand" : "")}>
                <div className="avatar_wrapper">
                    <div className="avatar">
                        <picture>
                            <source srcSet={avatar_webp} />
                            <img src={avatar} />
                        </picture>
                    </div>
                </div>
                <div className="title_box">
                    <h1 className="text_texture crystal">Ray's Another World</h1>
                    <h3 className="text_texture crystal">I'm A Programmer, I Have No Life.</h3>
                </div>
                <nav className="nav">
                    <ul className="text_texture crystal">
                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/about">關於</Link></li>
                        <li><Link to="/portfolio">作品叢</Link></li>
                    </ul>
                </nav>
            </div>
            { AdBlockWarning}
        </div>
    )
}