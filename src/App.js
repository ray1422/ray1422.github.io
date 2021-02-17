import './css/container.css';
import React, { Suspense } from 'react'
import { OuterWrapper } from './components/container.js'


let Foo = () => { return <div /> }
if (window.localStorage.useCookie !== "true") {
    Foo = React.lazy(() => import('./components/cookie_notify.jsx'))
}

export default (props) => {
    return (
        <OuterWrapper>
            <Suspense fallback={<div />}>
                <Foo />
            </Suspense>
        </OuterWrapper>)
}