import { Link, useHistory } from 'react-router-dom'
import avatar from '../assets/images/ray.jpg'
import avatar_webp from '../assets/images/ray.webp'
import '../css/header.css'
import { useEffect, useState, lazy, Suspense } from 'react'


export default function Header(props) {
    const [adBlockStat, setAdBlockStat] = useState(false)
    const [gtagBlockStat, setgtagBlockStat] = useState(false)
    const AdBlockWarning = lazy(() => import('./block_detections/ad_block'))
    const GTagBlockWarning = lazy(() => import('./block_detections/gtag_block'))
    const history = useHistory();
    let blockDetections = null;
    if (window.localStorage.disableBlockDetections !== "true")
        blockDetections = (
            <Suspense fallback={null}>
                <AdBlockWarning />
                <GTagBlockWarning />
            </Suspense>
        )

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
                <div className="title_box" style={{cursor: 'pointer'}} onClick={(event) => {
                    history.push("/")
                }}>
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
            {blockDetections}
        </div>
    )
}