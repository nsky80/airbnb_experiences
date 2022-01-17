import mr_whiskerson from "../images/mr-whiskerson.png"
import phone_icon from "../images/phone-icon.png" 
import mail_icon from "../images/mail-icon.png"

export default function Contact() {
    return (
        <div className="contact-card">
            <img src={mr_whiskerson}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone_icon} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}