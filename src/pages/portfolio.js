
import React, { useEffect } from 'react'
import { Section } from '../components/container'
import ff_img from "../assets/images/collections/fantastic_filter.jpg"
import ff_img_webp from '../assets/images/collections/fantastic_filter.webp'
import chisc_img from '../assets/images/collections/chisc.jpg'
import chisc_img_webp from '../assets/images/collections/chisc.webp'
import Image from '../utils/image'
import '../css/protfolio.css'

import 'lazysizes';


export default (props) => {
    useEffect(() => {
        props.setExpandHeader(false)
    })

    return (
        <div className="ani_item">
            <Section>
                <h2 className="text_texture crystal">作品叢</h2>
                <div className="project text_texture crystal">
                    <a href="https://ray-fish.me/Fantastic-Filter-Professional-Plus/">
                        <h3>幻想濾鏡</h3>
                    </a>
                    <div className="description">
                        <p>
                            一個簡單並且強大的修圖工具，用以去除手機夜拍照片中惱人的噪點，並且自動調色、提昇畫質。採用深度神經網路打造，僅須輸入照片並點擊開始。
                        </p>
                        <p>
                            我們提供跨平台桌面 GUI（支援 CUDA！）、Android APP，若您偏好使用文字界面，我們也有 Fantastic Filter CLI 可以使用。
                        </p>
                        <picture>
                            <source srcSet={ff_img_webp} />
                            <img data-src={ff_img} className="lazyload" />
                        </picture>
                    </div>
                </div>
                <div className="project">
                    <a className="text_texture crystal" href="https://ray-fish.me/chisc/">
                        <h3>中和資研社 官網</h3>
                    </a>
                    <div className="description">
                        <p className="text_texture crystal">
                            中和高中資訊研究社的官方網站（存檔）。
                        </p>
                        <p className="text_texture crystal">
                            透過簡潔的<acronym title="Material Design">材料設計</acronym>，搭配生動的色彩，創造出高中社團年輕卻充實、進取向上的形象。
                        </p>
                        <picture>
                            <source srcSet={chisc_img_webp} />
                            <img data-src={ff_img} className="lazyload" />
                        </picture>
                    </div>
                </div>
                <div className="project">
                    <a className="text_texture crystal" href="https://ray-fish.me/Arch-Newbie-Diary/">
                        <h3>Arch 萌新日記</h3>
                    </a>
                    <div className="description">
                        <p className="text_texture crystal">
                            紀錄各種使用 Arch Linux 的心得
                        </p>
                    </div>
                </div>
            </Section>
            {/* <Section>Hello</Section> */}
        </div>


    )
}