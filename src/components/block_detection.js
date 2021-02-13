import React from 'react'

import music from '../assets/sounds/easter_egg_music.mp3'
import { detectAnyAdblocker } from 'just-detect-adblock'
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



export default class Detection extends React.Component {
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



