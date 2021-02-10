import React, { useEffect } from 'react'
import { Section } from '../components/container'
export default (props) => {
    useEffect(() => {
        props.setExpandHeader(false)
    })

    return (
        <div className="ani_item">

            <Section>
                <h2 className="text_texture crystal">關於我</h2>
                <br />
                <div className="text_texture crystal">這個有空在寫吧OuO</div>
            </Section>
            <Section>
                <h2 className="text_texture crystal">資歷</h2>
                <ul className="text_texture crystal home_list">
                    <li>中正大學 資訊工程學系</li>
                    <li>擔任 <strong>中和高中資訊研究社 0<sup>th</sup> </strong> <acronym title="負責外交、編講義、打理整個社團的重要崗位。總之除了點名跟收錢以外的工作基本上都是教學做的">教學長</acronym></li>
                    <li>TISF 台灣國際科展（資訊工程）<strong>入圍</strong> </li>
                    <li>新北市學科能力競賽（資訊科）<strong>佳作</strong> </li>
                    <li>旺宏科學獎18<sup>th</sup> <strong>佳作</strong></li>
                    <li>新北市高中科展 <strong>特優</strong></li>
                    <li>全國高中科展 59<sup>th</sup> <strong>佳作</strong></li>
                </ul>
            </Section>
            <Section>
                <h2 className="text_texture crystal">技能樹</h2>
                <ul className="text_texture crystal skill_tree">
                    <li>
                        <span>Python</span>
                        <ul>
                            <li><acronym title="深度學習">TensorFlow</acronym></li>
                            <li><acronym title="網站後端">Django</acronym></li>
                        </ul>
                    </li>
                    <li>
                        <span>Linux</span>
                    </li>
                    <li>
                        <span>Git</span>
                    </li>
                    <li>
                        <span>PHP</span>
                    </li>
                </ul>
                <h2 className="text_texture crystal">技能樹（略懂）</h2>
                <ul className="text_texture crystal skill_tree">
                    <li>
                        <span>Android</span>
                    </li>
                    <li>
                        <span>C / C++</span>
                    </li>
                    <li>
                        <span>Java</span>
                    </li>
                    <li>前端</li>
                    <li>NodeJS</li>
                </ul>

            </Section>
        </div>

    )
}