import Detection from '../block_detection'
import { Section } from '../container'
import let_us_trace_gif from '../../assets/images/let_us_trace.gif'
export default class GTagBlockDetection extends Detection {
    constructor(...props) {
        super(...props)
        this.clickCnt = 0
        this.content = (
            <Section onClick={(e) => { this.onClick(e) }} className="ad_dection force_dark" style={{ userSelect: "none" }}>
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
            // try {
            //     const result = window.dataLayer.push('www');
            //     // console.log(result)
            //     resolve(result !== true);
            // } catch (e) { console.log(e) }
            // }, 3000)
            setTimeout(() => {
                fetch('https://www.google-analytics.com/collect').then(function (response) {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    resolve(false)
                    return response;
                }).then(function (response) { }).catch(function (error) {
                    resolve(true)
                });
            }, 3000)
        })
    }
}
