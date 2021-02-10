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
                <h2 className="text_texture crystal">相關連結</h2>
                <ul className="text_texture crystal">
                    <li><a href="https://ray-fish.me/blog" target="_BLANK">Blog</a></li>
                </ul>
            </Section>
            <Section>
                <h2 className="text_texture crystal">設定</h2>
                <div className="text_texture crystal">
                    <br />
                    這裡空空如也，什麼也沒有～
                </div>
            </Section>
        </div>

    )
}