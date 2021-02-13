import Detection from '../block_detection'
import { Section }from '../container'
import { detectAnyAdblocker } from 'just-detect-adblock'
export default class AdBlockDetection extends Detection {
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