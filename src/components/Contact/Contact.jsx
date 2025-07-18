import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("0fde1238-0ae3-4544-b8d6-828eaf878a65", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil dicta amet nostrum voluptatum! Ipsum minus possimus itaque asperiores quo adipisci enim alias?</p>
                    <div className="contact-details">
                        <div className="conotact-detail">
                            <img src={mail_icon} alt="" /><p>bhargavbhalekar12@gmail.com</p>
                        </div>
                        <div className="conotact-detail">
                            <img src={call_icon } alt="" /><p>+91-8551853895</p>
                        </div>
                        <div className="conotact-detail">
                            <img src={ location_icon} alt="" /><p>thane(w),maharastra-421302</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="Your Name"></label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label htmlFor="Your Email"></label>
                    <input type="email"placeholder='Enter Your Email'name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8"placeholder='Enter your message'></textarea>
                <button type='submit'className="contact-submit">Submit now</button>
                
                </form>
            </div>
        </div>
    )
}

export default Contact
