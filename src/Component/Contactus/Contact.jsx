import React from 'react'
 import "./Contact.css"
const Contact= () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "42e2703b-9949-4b5e-a4f2-32babbd257e9");

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
      alert(res.message);
    
    }
  };
  return (
    <div className='contact' id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <p className='c'>contact me</p>
              <div className="detail">
              <i className="fa-solid fa-envelope"></i><p>hegdeshreyas@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <p className='c'>Where to find me</p>
              <div className="detail">
              <i className="fa-solid fa-location-dot"></i><p>venoor ,karntaka,india -574242</p>
            </div>
              </div>
            <div className="followme">
            

              <p className='c'>Follow me</p>
              <div className="detail">
              <a href="http://www.intagram.com/_shreyas_hgd?igsh=MTVxMjMzanl5NG5waw==">
              <i className="fa-brands fa-instagram"></i>
              <p>Instagram</p></a>
              </div>
              <div className="detail">  
              <a href="https://github.com/shreyas86">
              <i className="fa-brands fa-github"></i>
              <p>Github</p>
              </a>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your Name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="Email" placeholder='Enter Your Email' name="Email"/>
          <label>Write Your Message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type="sybmit"className='contact-submit'>Submit Now</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
