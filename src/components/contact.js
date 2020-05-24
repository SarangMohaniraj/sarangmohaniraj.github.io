import React from "react"


const Contact = () => (
  <section id="contact">
    <div className="section-container">
      <h3 className="section-title">Contact</h3>
      <div className="section-content">
        <div className="contact-container">
        <h3 className="contact-header">Send me an email if you have any questions!</h3>
        <form /*action="https://formspree.io/xnqgjknq"*/ method="POST">
          <input type="text" name="_replyto" placeholder="Your Email"/>
          <input type="text" name="_subject" placeholder="Subject"/>
          <textarea name="message" placeholder="Message" rows={5}/>
          <input type="text" name="_gotcha" style={{display:"none"}} />
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
