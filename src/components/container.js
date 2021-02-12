import React, { Suspense, useEffect, useState } from 'react'
import { Switch, BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom"
// import About from '../pages/about.js'

import FallingSnowOverlay from './falling_snow_overlay.js'
import Header from './header.js'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../css/container.css'

const About = React.lazy(() => import('../pages/about.js'));
const Home = React.lazy(() => import('../pages/home.js'));
const Portfolio = React.lazy(() => import('../pages/portfolio.js'));

const AnimatedSwitch = (props) => {
    const location = useLocation()
    return (<TransitionGroup className="ani_wrap">
        <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={2500}
        >
            <Suspense fallback={null}>
                <Switch location={location}>
                    {/* <Route path="/about"><AniItem><About /></AniItem></Route> */}
                    <Route path="/about">
                        <About setExpandHeader={props.setExpandHeader} />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio setExpandHeader={props.setExpandHeader} setFallingSnow={props.setFallingSnow} />
                    </Route>
                    <Route path="/">
                        <Home setExpandHeader={props.setExpandHeader} />
                    </Route>
                </Switch>
            </Suspense>
        </CSSTransition>
    </TransitionGroup>)
}
export const OuterWrapper = (props) => {
    const [fallingSnow, setFallingSnow] = useState(true)
    const [expandHeader, setExpandHeader] = useState(false)
    return (
        <div className="outer_wrapper">
            {
                fallingSnow &&
                <FallingSnowOverlay />
            }
            <Router>
                <Header expand={expandHeader}></Header>
                <AnimatedSwitch setFallingSnow={setFallingSnow} setExpandHeader={setExpandHeader} />
            </Router>
            <div style={{height: '2rem'}}></div>
        </div>
    )
}
export const Section = (props) => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

