import React, { useEffect } from 'react'
import App from '../App'
import { Section, OuterWrapper } from '../components/container'
import falling_snow_overlay from '../components/falling_snow_overlay'
export default (props) => {
    useEffect(() => {
        props.setExpandHeader(false)
    })

    return (
        <div className="ani_item">
            <Section>
                <h2 className="text_texture crystal">作品叢</h2>
                Collection<br />Hello<br /></Section>
            {/* <Section>Hello</Section> */}
        </div>

    )
}