import './css/container.css';

import { OuterWrapper } from './components/container.js'
if (window.matchMedia('(prefers-color-scheme: light)').matches === true) {
    window.localStorage.theme = 'light'
}
export default (props) => {
    return (
        <OuterWrapper>
        </OuterWrapper>)
}