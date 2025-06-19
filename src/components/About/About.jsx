import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={profile} alt="" />
                </div>
                < div className='about-right'>
                    <div className='about-para'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur itaque obcaecati tempora sint. Quod ea quia, obcaecati a reiciendis magni maiores in doloremque?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis debitis rerum odio dolore culpa cumque, reiciendis, consequuntur, nulla quo omnis voluptatem esse!</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>React JS</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p><hr style={{ width: "50%" }} /></div>

                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIANCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>


    )
}

export default About
