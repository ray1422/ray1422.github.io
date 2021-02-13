import React from 'react'
import { detectAnyAdblocker } from 'just-detect-adblock'
import music from '../assets/sounds/easter_egg_music.mp3'
import { Section } from './container'
import let_us_trace_gif from '../assets/images/let_us_trace.gif'
export const audio = new Audio(music)
let audioCanPlay = false
let waitForPlay = false
document.body.appendChild(audio)
audio.addEventListener('ended', () => {
    document.body.classList.remove('warning')
})
audio.addEventListener('canplaythrough', () => {
    audioCanPlay = true
    if (waitForPlay) {
        waitForPlay = false
        audio.play()
    }
})



class Detection extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            detected: false,
        }
    }
    onClick(event) {
        if (document.body.classList.contains('warning')) return
        this.clickCnt++
        setTimeout(() => {
            (this.clickCnt > 0) && this.clickCnt--
        }, 1000)
        if (this.clickCnt > 5) {
            this.clickCnt = 0;
            document.body.classList.add('warning')
            if (audioCanPlay) audio.play()
            else {
                waitForPlay = true
            }
        }
    }
    componentDidMount() {
        this.detect().then((detected) => {
            if (detected) {
                this.ifDetected()
                let state = Object.assign({}, this.state)
                state.detected = detected
                this.setState(state)
            } else {
                this.ifNotDetected()
            }
        })
    }
    detect() {
        return new Promise((resolve, reject) => { resolve(false); })
    }
    ifDetected() { }
    ifNotDetected() { }
    render() {
        if (this.state.detected) {
            return this.content

        } else {
            return null
        }
    }
}


export class AdBlockDetection extends Detection {
    constructor(...props) {
        super(...props)
        this.clickCnt = 0
        this.content = (
            <Section onClick={(e) => { this.onClick(e) }} className="ad_dection" style={{ userSelect: "none" }}>
                <h2 style={{ color: "red" }}>什麼，你居然在使用 AdBlock⁉️</h2>
                <div style={{ color: "yellow", fontWeight: 600 }}>你大老遠跑來這邊，就是為了要用 AdBlock⁉️</div>
            </Section>
        )
    }

    detect() {
        return detectAnyAdblocker()
    }
}
export class GTagBlockDetection extends Detection {
    constructor(...props) {
        super(...props)
        this.clickCnt = 0
        this.content = (
            <Section onClick={(e) => { this.onClick(e) }} className="ad_dection" style={{ userSelect: "none" }}>
                <h2 style={{ color: "red" }}>什麼，你居然禁止 GTag 追蹤⁉️</h2>
                <div style={{ color: "yellow", fontWeight: 600 }}>
                    聽話，讓我看看！
                    <img style={
                        {
                            maxHeight: "10rem",
                            maxWidth: '50%',
                            marginTop: ".5rem",
                            // boxShadow: "3px 3px 1px blue, 7px 7px 1px purple",
                            animation: "videoAni 1s linear 0s infinite forwards",
                            display: "block"
                        }}
                        src={let_us_trace_gif}
                    />
                </div>
            </Section>
        )
    }

    detect() {
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
                    try {
                        const result = window.dataLayer.push('www');
                        // console.log(result)
                        resolve(result !== true);
                    } catch (e) { console.log(e) }
                // }, 3000)
        })
    }
}
