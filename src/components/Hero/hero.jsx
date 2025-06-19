import React from 'react'
import './hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Bhargav Bhalekar,</span>Fullstack developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio nobis sequi eligendi atque.
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div></div>
    )
}

export default hero
