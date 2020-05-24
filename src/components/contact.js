import React from "react"


const Contact = () => (
  <section id="contact">
    <div className="section-container">
      <h3 className="section-title">Contact</h3>
      <div className="section-content">
        <div className="contact-container">
        <h3 className="contact-header">Send me an email if you have any questions!</h3>
        <form /*action="https://formspree.io/xnqgjknq"*/ method="POST">
          <label>Your Email<input type="text" name="_replyto" /></label>
          <label>Subject<input type="text" name="_subject" /></label>
          <label>Message<textarea name="message" rows={5}/></label>
          <input type="text" name="_gotcha" style={{display:"none"}} />
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
