import { Link } from 'react-router-dom'
import avatar from '../assets/images/ray.jpg'
import avatar_webp from '../assets/images/ray.webp'

import '../css/header.css'
export default function Header(props) {
    return (
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
    )
}